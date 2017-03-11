import { EventEmitter } from "events"
import { Store } from "core/store"
import ArticleEntity from "./entity"

export const ARTICLES_GET = "articles.get"
export const ARTICLES_FIND = "articles.find"
export const ARTICLES_CREATE = "articles.create"
export const ARTICLES_UPDATE = "articles.update"
export const ARTICLES_REMOVE = "articles.remove"

export default class Articles {
  private events: EventEmitter = new EventEmitter()

  constructor(private store: Store) {
  }

  async create(article: ArticleEntity): Promise<ArticleEntity> {
    await this.store.put(article.id, article)

    this.events.emit(ARTICLES_CREATE, article)

    return await this.store.get(article.id)
  }

  async find(): Promise<ArticleEntity[]> {
    const articles: ArticleEntity[] = await this.store.all()
    this.events.emit(ARTICLES_FIND, articles)
    return articles
  }

  async get(id: string): Promise<ArticleEntity> {
    const article: ArticleEntity = await this.store.get(id)
    this.events.emit(ARTICLES_GET, article)
    return article
  }

  async init(): Promise<ArticleEntity> {
    return new ArticleEntity()
  }

  on(channel: string, listener: Function) {
    this.events.on(channel, listener)
  }

  async remove(article: ArticleEntity): Promise<void> {
    await this.store.remove(article.id)
    this.events.emit(ARTICLES_REMOVE, article)
  }

  async update(article: ArticleEntity): Promise<ArticleEntity> {
    await this.store.put(article.id, article)

    this.events.emit(ARTICLES_UPDATE, article)

    return await this.store.get(article.id)
  }

}
