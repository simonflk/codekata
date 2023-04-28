// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(disemvowel, RUN_TESTS);

/**
 * @param {string} str 
 */
function disemvowel(str) {
  return str.replaceAll(/[aeiou]/gi, '');
}