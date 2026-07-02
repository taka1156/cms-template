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
