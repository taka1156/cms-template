# cms-template

## How to use
1. `cd contents`

2. `cp .env.example .env`

3. Please go to the following link and create a bucket named “cms.”

http://localhost:9001/rustfs/console/browser/

## Commands

| Command | Description |
|---|---|
| `cmsc init` | Create a default `cmsc.json` config file in the current directory. Fails if one already exists. |
| `cmsc setup` | Create the directories defined in `cmsc.json` (`articleDir` and `imageDir` sub-directories). |
| `cmsc new` | Interactively create a new Markdown post with front matter under `articleDir`. Prompts for title, category, and tags. The slug is auto-generated as a UUID (never entered manually) and the date is filled automatically with the current timestamp. |
| `cmsc convert` | Read `cmsc.json`, walk `articleDir` for `.md` files, parse each front matter, and build/write the output JSON (`all` / `category` / `tag`) to `outputDir`. Posts with unregistered categories or tags are skipped with a notice. |
| `cmsc publish` | Upload changed images to Cloudflare R2 (diff-based, tracked via `.cache.json`) and upload the output JSON files to R2. Requires `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_ENDPOINT`, `ENABLE_PATH_STYLE_ENDPOINTS` environment variables. |


For other ways to use it, please see below.

https://github.com/taka1156/cms-cli


---
icon sample
- https://www.svgrepo.com
- https://fonts.google.com/icons
