import assert from 'assert';
import model from '../opencv4nodejs'
import { Mat } from '../typings';

export default (cv: typeof model) => {
  // deprecate wrapper for the old calcHist API
  const _calcHist = cv.calcHist;
  cv.calcHist = function calcHist(img: Mat, histAxes: { channel: number, bins: number, ranges: [number, number] }[], mask?: Mat): Mat {
    assert(img instanceof cv.Mat, 'Imgproc::CalcHist - Error: expected argument 0 to be of type Mat');
    assert(Array.isArray(histAxes), 'Imgproc::CalcHist - Error: expected argument 1 to be of type array of HistAxes');

    histAxes = histAxes.slice();

    let warningThrown = false;
    const len = histAxes.length;

    for (let i = 0; i < len; ++i) {
      const entry = histAxes[i];
      if (!(entry instanceof cv.HistAxes)) {
        if (!warningThrown) {
          warningThrown = true;
          console.warn(`Imgproc::CalcHist - Deprecated support for object in argument 1 at index ${i}. Please switch to using HistAxes instances.`);
        }
        histAxes[i] = new cv.HistAxes(entry) as any;
      }
    }

    if (mask) {
      return _calcHist(img, histAxes, mask);
    }
    return _calcHist(img, histAxes);
  }
}