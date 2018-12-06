/**
 *
 * @namespace UzbekTransliterator
 */
function UzbekTransliterator() {
    var self = this;
}

UzbekTransliterator.prototype.cyrl2latn = require("./cyrl2latn");
UzbekTransliterator.prototype.latn2cyrl = require("./latn2cyrl");
UzbekTransliterator.prototype.constructor = UzbekTransliterator;

module["exports"] = UzbekTransliterator;