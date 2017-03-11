import { expect } from "chai"
import Store from "../../core/store"
import Articles, * as ArticlesEvents from "./index"
import ArticleEntity from "./entity"

describe(Articles.name, () => {
  const store = new Store.Memory()
  const articles = new Articles(store)

  afterEach(() => store.flush())

  it("exists", () => expect(Articles).to.be.ok)

  describe("#create", () => {
    const article = new ArticleEntity()

    it("emits ARTICLES_SAVE, with article to listeners", () => {
      let saveContents: ArticleEntity | null = null

      articles.on(
        ArticlesEvents.ARTICLES_CREATE,
        (article: ArticleEntity) => saveContents = article
      )

      return articles
        .create(article)
        .then(() => expect(saveContents).to.eql(article))
    })

    it("promises a returned article", () => {
      return articles
        .create(article)
        .then((subject) => expect(subject).to.eql(article))
    })
  })

  describe("#index", () => {
    const article = new ArticleEntity()

    it("emits ARTICLES_INDEX with article to listeners", () => {
      let getResults: ArticleEntity[] | null = null

      articles.on(
        ArticlesEvents.ARTICLES_FIND,
        (results: ArticleEntity[]) => getResults = results
      )

      return articles
        .create(article)
        .then(() => articles.find())
        .then(() => expect(getResults).to.eql([article]))
    })

    it("promises a returned articles list", () => {
      return articles
        .create(article)
        .then(() => articles.find())
        .then((subject) => expect(subject).to.eql([article]))
    })
  })

  describe("#get", () => {
    const article = new ArticleEntity()

    it("emits ARTICLES_FIND with article to listeners", () => {
      let getResult: ArticleEntity | null = null

      articles.on(
        ArticlesEvents.ARTICLES_GET,
        (article: ArticleEntity) => getResult = article
      )

      return articles
        .create(article)
        .then(() => articles.get(article.id))
        .then(() => expect(getResult).to.eql(article))
    })

    it("promises a returned article", () => {
      return articles
        .create(article)
        .then(() => articles.get(article.id))
        .then((subject) => expect(subject).to.eql(article))
    })
  })

  describe("#init", () => {
    it("promises a new article", () => {
      return articles
        .init()
        .then((subject) => expect(subject.isEmpty()).to.be.true)
    })
  })

  describe("#update", () => {
    const article = new ArticleEntity()

    it("emits ARTICLES_UPDATE, with article to listeners", () => {
      let updateContents: ArticleEntity | null = null

      articles.on(
        ArticlesEvents.ARTICLES_UPDATE,
        (article: ArticleEntity) => updateContents = article
      )

      return articles
        .create(article)
        .then(() => articles.update(article))
        .then(() => expect(updateContents).to.eql(article))
    })

    it("promises the updated article", () => {
      return articles
        .create(article)
        .then(() => articles.update(article))
        .then((subject) => expect(subject).to.eql(article))
    })
  })

  describe("#remove", () => {
    const article = new ArticleEntity()

    it("emits ARTICLES_REMOVE", () => {
      let wasCalled: boolean = false

      articles.on(ArticlesEvents.ARTICLES_REMOVE, () => wasCalled = true)

      return articles
        .remove(article)
        .then(() => expect(wasCalled).to.be.true)
    })

    it("removes the article", () => {
      return articles
        .create(article)
        .then((article) => expect(article).to.eql(article))
        .then(() => articles.remove(article) )
        .then((subject) => expect(subject).to.be.undefined)
    })

    it("returns an empty promise", () => {
      return articles
        .remove(article)
        .then((subject) => expect(subject).to.be.undefined)
    })
  })

})
