import { OpenCVBuildEnvParams } from '@u4/opencv-build';
import promisify from './promisify';
import raw from './cvloader';
import deprecations from './src/deprecations';

import type * as openCV from './typings/index';
declare type OpenCVType = typeof openCV;

function loadOpenCV(opt?: OpenCVBuildEnvParams): OpenCVType {
  const cvBase: OpenCVType = raw(opt);
  // test presence of 2 basic function
  if (!cvBase.accumulate) {
    throw Error('failed to load opencv basic accumulate not found.')
  }
  if (!cvBase.blur) {
    throw Error('failed to load opencv basic blur not found.')
  }
  
  // promisify async methods
  const cvObj = promisify<OpenCVType>(cvBase);
  deprecations(cvObj);
  // add xmodules alias if not present (moved to C++ part)
  // if (!cvObj.xmodules && cvObj.modules)
  //  cvObj.xmodules = cvObj.modules
  return cvObj;
}
const cv: OpenCVType = loadOpenCV({ prebuild: 'latestBuild' });
export default cv;