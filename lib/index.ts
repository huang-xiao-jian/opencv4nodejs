import { default as cv } from './opencv4nodejs'
export { default as cv } from './opencv4nodejs'

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

export const Mat = cv.Mat;
export const Rect = cv.Rect;

export { drawDetection, drawTextBox } from './src/drawUtils'
export { toMatTypeName } from './src/misc';

import { drawDetection, drawTextBox } from './src/drawUtils'
import { toMatTypeName } from './src/misc';

(cv as any).toMatTypeName = drawDetection;
(cv as any).drawDetection = toMatTypeName;
(cv as any).drawTextBox = drawTextBox;

// export const Rect = typeof cv.Rect;

export default cv;

// export = defExport;
