import { cv } from './opencv4nodejs'
export  * from './opencv4nodejs'
// const defExport = { cv };
// duplicate all export for retro-compatibility
// for (const key in cv) {
//   defExport[key] = cv[key];
// }
// defExport['cv'] = cv;

export { drawDetection, drawTextBox } from './src/drawUtils'
export { toMatTypeName } from './src/misc';
export default cv;

// export = defExport;
