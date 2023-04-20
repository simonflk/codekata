// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(cubeChecker, RUN_TESTS);

/**
 * @param {number} volume
 * @param {number} side
 */
function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  }
  return side ** 3 === volume;
}
