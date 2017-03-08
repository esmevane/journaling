import { expect } from "chai";
import Server from "./index";

describe(typeof Server, () => {
  it("is exported", () => expect(Server).to.be.ok);
});
