"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promisify_1 = __importDefault(require("./promisify"));
const cvloader_1 = __importDefault(require("./cvloader"));
const deprecations_1 = __importDefault(require("./src/deprecations"));
function loadOpenCV(opt) {
    const cvBase = (0, cvloader_1.default)(opt);
    // test presence of 2 basic function
    if (!cvBase.accumulate) {
        throw Error('failed to load opencv basic accumulate not found.');
    }
    if (!cvBase.blur) {
        throw Error('failed to load opencv basic blur not found.');
    }
    // promisify async methods
    const cvObj = (0, promisify_1.default)(cvBase);
    (0, deprecations_1.default)(cvObj);
    // add xmodules alias if not present (moved to C++ part)
    // if (!cvObj.xmodules && cvObj.modules)
    //  cvObj.xmodules = cvObj.modules
    return cvObj;
}
const cv = loadOpenCV({ prebuild: 'latestBuild' });
exports.default = cv;
//# sourceMappingURL=opencv4nodejs.js.map