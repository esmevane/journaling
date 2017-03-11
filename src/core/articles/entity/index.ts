import * as uuid from "uuid"
import * as ArticleValidations from "../validations"

export interface ArticleAttributes {
  body: string
  id: string
  title: string
}

export default class Article implements ArticleAttributes {
  private attributes: ArticleAttributes
  private defaults: ArticleAttributes = {
    id: uuid.v4(),
    title: "",
    body: ""
  }

  constructor(attributes: Partial<ArticleAttributes> = {}) {
    this.attributes = { ...this.defaults, ...attributes }
  }

  get body(): string { return this.attributes.body }
  get id(): string { return this.attributes.id }
  get title(): string { return this.attributes.title }

  isEmpty(): Boolean {
    return ArticleValidations.isEmpty(this)
  }
}
