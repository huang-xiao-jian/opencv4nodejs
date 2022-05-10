"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMatTypeName = exports.drawTextBox = exports.drawDetection = void 0;
const opencv4nodejs_1 = require("./opencv4nodejs");
// const defExport = { cv };
// duplicate all export for retro-compatibility
// for (const key in cv) {
//   defExport[key] = cv[key];
// }
// defExport['cv'] = cv;
var drawUtils_1 = require("./src/drawUtils");
Object.defineProperty(exports, "drawDetection", { enumerable: true, get: function () { return drawUtils_1.drawDetection; } });
Object.defineProperty(exports, "drawTextBox", { enumerable: true, get: function () { return drawUtils_1.drawTextBox; } });
var misc_1 = require("./src/misc");
Object.defineProperty(exports, "toMatTypeName", { enumerable: true, get: function () { return misc_1.toMatTypeName; } });
exports.default = opencv4nodejs_1.cv;
// export = defExport;
//# sourceMappingURL=index.js.map