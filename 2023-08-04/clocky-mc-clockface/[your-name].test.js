// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = false;
makeTest(whatTimeIsIt, RUN_TESTS);


/**
 * @param {number} angle 
 */
function whatTimeIsIt (angle) {
  // Your code here
  return "12:00";
}