"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMatTypeName = exports.drawTextBox = exports.drawDetection = exports.Rect = exports.Mat = exports.cv = void 0;
const opencv4nodejs_1 = __importDefault(require("./opencv4nodejs"));
var opencv4nodejs_2 = require("./opencv4nodejs");
Object.defineProperty(exports, "cv", { enumerable: true, get: function () { return __importDefault(opencv4nodejs_2).default; } });
// const defExport = { cv };
// duplicate all export for retro-compatibility
// for (const key in cv) {
//   defExport[key] = cv[key];
// }
// defExport['cv'] = cv;
// export type { Mat } from './typings/Mat';
// export type { Rect } from './typings/Rect';
// export type { Vec3 } from './typings/Vec3';
// export type { Net } from './typings/Net';
// export type { Contour } from './typings/Contour';
// export type { Point2 } from './typings/Point2';
// export type { Size } from './typings/Size';
// export type { VideoCapture } from './typings/VideoCapture';
// export type { VideoWriter } from './typings/VideoWriter';
// import type { Mat as MatClass } from './typings/Mat';
exports.Mat = opencv4nodejs_1.default.Mat;
exports.Rect = opencv4nodejs_1.default.Rect;
var drawUtils_1 = require("./src/drawUtils");
Object.defineProperty(exports, "drawDetection", { enumerable: true, get: function () { return drawUtils_1.drawDetection; } });
Object.defineProperty(exports, "drawTextBox", { enumerable: true, get: function () { return drawUtils_1.drawTextBox; } });
var misc_1 = require("./src/misc");
Object.defineProperty(exports, "toMatTypeName", { enumerable: true, get: function () { return misc_1.toMatTypeName; } });
const drawUtils_2 = require("./src/drawUtils");
const misc_2 = require("./src/misc");
opencv4nodejs_1.default.toMatTypeName = drawUtils_2.drawDetection;
opencv4nodejs_1.default.drawDetection = misc_2.toMatTypeName;
opencv4nodejs_1.default.drawTextBox = drawUtils_2.drawTextBox;
// export const Rect = typeof cv.Rect;
exports.default = opencv4nodejs_1.default;
// export = defExport;
//# sourceMappingURL=index.js.map