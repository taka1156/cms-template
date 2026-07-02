# brite-template

[日本語はこちら](./README.ja.md)

## How to use
1. `cd contents`

2. `cp .env.example .env`

3. Please go to the following link and create a bucket named "cms".

http://localhost:9001/rustfs/console/browser/

If you want to integrate with a frontend, try using `brite.ts`.

<details>
<summary>Types</summary>

```typescript
export type ArticleSummary = {
    slug:       string;
    title:      string;
    thumbnail:  string;
    category:   string;
    tags:       string[];
    created_at: string;
    updated_at: string;
}

// common type for tag and category classification
export type ArticleClassified ={
    [key: string]: ArticleSummary[];
}

export type ArticleElement = {
    summary: ArticleSummary;
    content: string;
}
```

</details>

## Commands

| Command | Description |
|---|---|
| `brite init` | Create a default `brite.json` config file in the current directory. Fails if one already exists. |
| `brite setup` | Create the directories defined in `brite.json` (`articleDir` and `imageDir` sub-directories). |
| `brite new` | Interactively create a new Markdown post with front matter under `articleDir`. Prompts for title, category, and tags. The slug is auto-generated as a UUID (never entered manually) and the date is filled automatically with the current timestamp. |
| `brite convert` | Read `brite.json`, walk `articleDir` for `.md` files, parse each front matter, and build/write the output JSON (`all` / `category` / `tag`) to `outputDir`. Posts with unregistered categories or tags are skipped with a notice. |
| `brite publish` | Upload changed images to Cloudflare R2 (diff-based, tracked via `.cache.json`) and upload the output JSON files to R2. Requires `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_ENDPOINT`, `ENABLE_PATH_STYLE_ENDPOINTS` environment variables. |


For other ways to use it, please see below.

https://github.com/taka1156/brite


---
icon sample
- https://www.svgrepo.com
- https://fonts.google.com/icons