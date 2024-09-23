const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times    (five ())), 35, "seven(times(five ()))");
    assert.strictEqual(four (plus     (nine ())), 13, "four (plus(nine ()))");
    assert.strictEqual(eight(minus    (three())),  5, "eight(minus(three()))");
    assert.strictEqual(six  (dividedBy(two  ())),  3, "six(dividedBy(two()))");
  });
});
