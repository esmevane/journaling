import { expect } from "chai"
import ArticleEntity from "./index"

describe(ArticleEntity.name, () => {
  const id = "some-id-string"
  const title = "An Article"
  const body = "# Hello!"
  const entity = new ArticleEntity({ id, title, body })

  it("has an id", () => expect(entity.id).to.eql(id))
  it("has a title", () => expect(entity.title).to.eql(title))
  it("has a body", () => expect(entity.body).to.eql(body))

  describe("#isEmpty", () => {
    it("is empty when brand new", () => {
      expect(new ArticleEntity().isEmpty()).to.be.true
    })
  })
})
