// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(createArray, RUN_TESTS);

/**
 * @param {number} number
 */
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++ ) {
    newArray.push(counter);
  }

  return newArray;
}


//A common bug for me: I always use commas instead of semi-colons in this style of loop