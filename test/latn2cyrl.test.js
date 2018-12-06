if (typeof module !== "undefined") {
    var assert = require("assert");
    var transliterator = require("../index");
}

describe("latn2cyrl() test", function () {
    it("returns mock text", function () {
        assert.strictEqual(transliterator.latn2cyrl(), "Ўзбек тилида текст");
    });
});