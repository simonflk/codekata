// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(findMultiples, RUN_TESTS);


/**
 * @param {number} integer 
 * @param {number} limit 
 */
function findMultiples(integer, limit) {
  let multiples /** @type number[] */ = [];
  for (let i = 1; integer * i <= limit; i++) {
    multiples.push(integer * i);
  }
  return multiples;
}
