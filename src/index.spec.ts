import { expect } from "chai"
import { Core, Server } from "./index"

describe("Project-wide exports", () => {
  it(`exports ${Core.name}`, () => expect(Core).to.be.ok)
  it(`exports ${Server.name}`, () => expect(Server).to.be.ok)
})
