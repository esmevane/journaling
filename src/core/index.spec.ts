import { expect } from "chai"
import Core, * as CoreLibs from "./index"

describe(Core.name, () => {
  it("is exported", () => expect(Core).to.be.ok)

  describe("Libs", () => {
    it("exports Articles", () => expect(CoreLibs.Articles).to.be.ok)
    it("exports Store", () => expect(CoreLibs.Store).to.be.ok)
  })
})
