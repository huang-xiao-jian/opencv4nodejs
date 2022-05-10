import { OpenCVBuildEnvParams } from '@u4/opencv-build';
import promisify from './promisify';
import raw from './cvloader';
import deprecations from './src/deprecations';
import type * as openCV from './typings/index';

function loadOpenCV(opt?: OpenCVBuildEnvParams): typeof openCV {
  const cvBase = raw(opt);
  if (!(cvBase as any).accumulate) {
    throw Error('failed to load opencv basic accumulate not found.')
  }
  if (!(cvBase as any).blur) {
    throw Error('failed to load opencv basic blur not found.')
  }
  
  // promisify async methods
  const cvObj = promisify(cvBase) as any as typeof openCV;
  deprecations(cvObj);
  // add xmodules alias if not present (moved to C++ part)
  // if (!cvObj.xmodules && cvObj.modules)
  //  cvObj.xmodules = cvObj.modules
  return cvObj;
}

export const cv = loadOpenCV({ prebuild: 'latestBuild' });
