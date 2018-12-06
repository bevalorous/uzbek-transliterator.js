if (typeof module !== "undefined") {
    var assert = require("assert");
    var transliterator = require("../index");
}

describe("cyrl2latn() test", function () {
    it("returns mock text", function () {
        assert.strictEqual(transliterator.cyrl2latn(), "O‘zbek tilida tekst");
    });
});