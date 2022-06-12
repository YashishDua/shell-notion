# Notes Dump on Shell, transported to Notion

Fairly simple lines of code to dump notes on Shell which are saved to Notion instantly.

## Motiviation?

1. I am always on shell.
2. I use Notion for different purposes. So to take daily "impromptu/random" notes, I have to navigate in my notion's collection, which is unnecesary.
3. This integration helps me push anything to a specific Notion page of mine, which I can go through later.

### Drawbacks?

Many! Use Notion directly, don't rely on this.


## How to use?

### Install Deno
```
brew install deno
```

### Provide variables and run
```
NOTION_SECRET=<> PAGE_ID=<> deno run --allow-net --allow-env worker.ts
```