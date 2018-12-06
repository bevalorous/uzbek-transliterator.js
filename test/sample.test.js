if (typeof module !== "undefined") {
    var assert = require("assert");
}

describe("sample test", function () {
    it("true is true", function () {
        assert(true);
    });

    it("false is not true", function () {
        assert(!false);
    })
});