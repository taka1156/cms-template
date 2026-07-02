# brite-template

[English version](./README.md)

## 使い方
1. `cd contents`

2. `cp .env.example .env`

3. 以下のリンクにアクセスし、「cms」という名前のバケットを作成してください。

http://localhost:9001/rustfs/console/browser/

フロントエンドと統合する場合は、`brite.ts` を使ってみてください。

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

## コマンドリスト

| Command | Description |
|---|---|
| `brite init` | カレントディレクトリにデフォルトの `brite.json` 設定ファイルを作成します。既に存在する場合は失敗します。 |
| `brite setup` | `brite.json` で定義されたディレクトリ（`articleDir` と `imageDir` のサブディレクトリ）を作成します。 |
| `brite new` | フロントマター付きの新しいMarkdown記事を `articleDir` 配下に対話形式で作成します。タイトル、カテゴリ、タグの入力を求められます。スラッグはUUIDで自動生成され（手入力は不要）、日付は現在時刻が自動で入力されます。 |
| `brite convert` | `brite.json` を読み込み、`articleDir` 内の `.md` ファイルを走査してそれぞれのフロントマターを解析し、出力用JSON（`all` / `category` / `tag`）を `outputDir` に生成・書き込みします。未登録のカテゴリやタグを持つ記事はスキップされ、通知が表示されます。 |
| `brite publish` | 変更された画像をCloudflare R2にアップロード（`.cache.json` で追跡した差分ベース）し、出力用JSONファイルをR2にアップロードします。`R2_ACCESS_KEY_ID`、`R2_SECRET_ACCESS_KEY`、`R2_ENDPOINT`、`ENABLE_PATH_STYLE_ENDPOINTS` の環境変数が必要です。 |


その他の使い方については以下をご覧ください。

https://github.com/taka1156/brite


---
icon sample
- https://www.svgrepo.com
- https://fonts.google.com/icons