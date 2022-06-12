export class NotionClient {
  secret: string

  pageId: string

  constructor(secret: string, pageId: string) {
    this.secret = secret;
    this.pageId = pageId;
  }

  async save (content: string) {
    const body = {
      "children": [
        {
          "object": "block",
          "type": "paragraph",
          "paragraph": {
            "rich_text": [
              {
                "type": "text",
                "text": {
                  "content": content,
                }
              }
            ]
          }
        }
      ]
    }
  
    const req = new Request(`https://api.notion.com/v1/blocks/${this.pageId}/children`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Notion-Version": "2022-02-22",
        "Authorization": `Bearer ${this.secret}`
      },
      body: JSON.stringify(body)
    });
  
    const response = await fetch(req);
  
    if (response.status >= 300) {
      console.error(`\n${response.text()}\n`);
    }
  }
}