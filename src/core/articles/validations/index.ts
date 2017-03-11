import ArticleEntity from "core/articles/entity"

export const noBody = (article: ArticleEntity): Boolean =>
  article.body.length === 0

export const noTitle = (article: ArticleEntity): Boolean =>
  article.title.length === 0

export const isEmpty = (article: ArticleEntity): Boolean =>
  noTitle(article) && noBody(article)