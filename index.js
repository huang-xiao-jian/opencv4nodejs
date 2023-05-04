// const compileLib = require("./install/compileLib.js");
// compileLib.compileLib(process.argv);
const cv = require('./lib/opencv4nodejs')
const version = `${cv.getVersionMajor()}.${cv.getVersionMinor()}.${cv.getVersionRevision()}`;

console.log('version', version)