import { OpenCVBuildEnvParams } from '@u4/opencv-build';
import promisify from './promisify';
import extendWithJsSources from './src';
import raw from './cvloader';
import * as openCV from '..';

function loadOpenCV(opt?: OpenCVBuildEnvParams): typeof openCV {
  //const isElectronWebpack =
  //  // assume module required by webpack if no system path inv envs
  //  !process.env.path
  //  // detect if electron https://github.com/electron/electron/issues/2288
  //  && global.window && global.window.process && (global.window.process as any).type
  //  && global.navigator && ((global.navigator.userAgent || '').toLowerCase().indexOf(' electron/') > -1)
  // let cvBase = isElectronWebpack ? require('../build/Release/opencv4nodejs.node') : require('./cvloader')
  const cvBase = raw(opt);
  if (!cvBase.accumulate) {
    throw Error('failed to load opencv basic accumulate not found.')
  }
  if (!cvBase.blur) {
    throw Error('failed to load opencv basic blur not found.')
  }
  
  // promisify async methods
  let cvObj = promisify(cvBase);
  cvObj = extendWithJsSources(cvObj);
  // add xmodules alias if not present
  if (!cvObj.xmodules && cvObj.modules)
    cvObj.xmodules = cvObj.modules
  return cvObj;
}

const cv = loadOpenCV({ prebuild: 'latestBuild' });
const defExport = { cv };
// duplucate all export for retrocompatibility
for (const key in cv) {
  defExport[key] = cv[key];
}
defExport['cv'] = cv;

export = defExport;