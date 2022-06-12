import { NotionClient } from './notion-client.ts';

const pageId = Deno.env.get('PAGE_ID'),
  secret = Deno.env.get('NOTION_SECRET'),
  buf = new Uint8Array(1024);

if (!pageId) {
  console.log('Page ID missing in environment');
  Deno.exit();
}

if (!secret) {
  console.log('Secret missing in environment');
  Deno.exit();
}

const notionClient = new NotionClient(secret, pageId);

while (true) {
  await Deno.stdout.write(new TextEncoder().encode('>'));

  const bytesRead = <number>await Deno.stdin.read(buf),
    input = new TextDecoder().decode(buf.subarray(0, bytesRead)).trim();

  notionClient.save(input);
}