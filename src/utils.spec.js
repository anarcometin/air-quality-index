import { isAvailable, mapIndexed } from "./utils";

describe("mapIndexed", () => {
  it("includes index in iteration", () => {
    const col = mapIndexed((x, i) => ({ foo: x, bar: i }), [1, 2])
    expect(col).toEqual([{ foo: 1, bar: 0 }, { foo: 2, bar: 1 }])
  });

});
describe("isAvailable", () => {
  it("validates availability", () => {
    const n = isAvailable(null)
    const u = isAvailable(undefined)
    const a = isAvailable({ foo: 'bar' })
    expect(n).toEqual(false)
    expect(u).toEqual(false)
    expect(a).toEqual(true)
  });
})