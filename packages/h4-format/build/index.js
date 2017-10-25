"use strict";
exports.__esModule = true;
var h4_zip_1 = require("h4-zip");
function h4format(s) {
    return 'whatever:' + s;
}
exports.h4format = h4format;
console.log(h4format('random'));
console.log(h4_zip_1.h4zip('kurac'));
