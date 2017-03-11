import { expect } from "chai"
import Memory from "./index"

describe("Memory", () => {
  const store = new Memory()

  describe("#all", () => {
    it("returns all inserted items", () => {
      const value = "hey"
      store.put("anything", value)
      expect(store.all()).to.eql([value])
    })
  })

  describe("#get", () => {
    it("returns null if it doesn't have a value", () => {
      expect(store.get("nothing")).to.be.undefined
    })
  })

  describe("#put", () => {
    it("puts the given item in the given key", () => {
      const key = "some-id-probably"
      const value = {}

      store.put(key, value)

      expect(store.get(key)).to.eql(value)
    })
  })

  describe("remove", () => {
    it("removes the given key", () => {
      const key = "some-id-probably"
      const value = "Hooray!"

      store.put(key, value)

      expect(store.get(key)).to.eql(value)

      store.remove(key)

      expect(store.get(key)).to.be.undefined
    })

  })
})
