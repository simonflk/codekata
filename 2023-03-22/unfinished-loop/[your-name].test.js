// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = false;
makeTest(createArray, RUN_TESTS);

/**
 * @param {number} number
 */
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; ) {
    newArray.push(counter);
  }

  return newArray;
}
