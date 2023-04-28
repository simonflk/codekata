// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(calculate, RUN_TESTS);

/**
 *
 * @param {number[][]} recs
 * @returns {number}
 */

function calculate(recs) {
  //short circuit no rectangles
  if (recs.length === 0) {
    return 0;
  }

  let rectPointsArrays = [];

  recs.forEach((rec) => {
    const startingPoint = [rec[0], rec[1]];
    const endPoint = [rec[2] - 1, rec[3] - 1];

    const deltaX = endPoint[0] - startingPoint[0];
    const deltaY = endPoint[1] - startingPoint[1];

    console.log(deltaX, deltaY);

    if (deltaX === 0 && deltaY === 0) {
      rectPointsArrays.push(startingPoint);
    } else {
      for (let i = 0; i <= deltaX; i++) {
        for (let j = 0; j <= deltaY; j++) {
          rectPointsArrays.push([startingPoint[0] + i, startingPoint[1] + j]);
        }
      }
    }
  });

  //i did steal this snippet for filtering uniques out of array or arrays
  var unique = rectPointsArrays
    .map((ar) => JSON.stringify(ar))
    .filter((itm, idx, arr) => arr.indexOf(itm) === idx)
    .map((str) => JSON.parse(str));

  console.log('uniqu', rectPointsArrays.length, unique.length);

  return unique.length;
}
