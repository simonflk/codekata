// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(cubeChecker, RUN_TESTS);

/**
 * @param {number} volume
 * @param {number} side
 * @returns
 */
function cubeChecker(volume, side) {
  if (volume === 0){
    return false
  }
  if (Math.abs(volume) === Math.pow(side, 3)){
    return true
  }
  return false;
}
