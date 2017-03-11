import { expect } from "chai"
import ArticleEntity from "../entity"
import * as ArticleValidations from "./index"

describe("Article validations", () => {

  describe("#noBody", () => {
    describe("with no body", () => {
      it("is true", () => {
        const article: ArticleEntity = new ArticleEntity()
        expect(ArticleValidations.noBody(article)).to.be.true
      })
    })

    describe("otherwise", () => {
      it("is false", () => {
        const article: ArticleEntity = new ArticleEntity({ body: "# Hi! " })
        expect(ArticleValidations.noBody(article)).to.be.false
      })
    })
  })

  describe("#noTitle", () => {
    describe("with no title", () => {
      it("is true", () => {
        const article: ArticleEntity = new ArticleEntity()
        expect(ArticleValidations.noTitle(article)).to.be.true
      })
    })

    describe("otherwise", () => {
      it("is false", () => {
        const article: ArticleEntity = new ArticleEntity({ title: "Greetings" })
        expect(ArticleValidations.noTitle(article)).to.be.false
      })
    })
  })

  describe("#isEmpty", () => {
    describe("with no title and body", () => {
      it("is true", () => {
        const article: ArticleEntity = new ArticleEntity()
        expect(ArticleValidations.isEmpty(article)).to.be.true
      })
    })

    describe("with a body", () => {
      it("is false", () => {
        const article: ArticleEntity = new ArticleEntity({ body: "# Hi! " })
        expect(ArticleValidations.isEmpty(article)).to.be.false
      })
    })

    describe("with a title", () => {
      it("is false", () => {
        const article: ArticleEntity = new ArticleEntity({ title: "Greetings" })
        expect(ArticleValidations.isEmpty(article)).to.be.false
      })
    })
  })

})