// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(findUniq, RUN_TESTS);

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findUniq(arr) {
  const singles = new Set();
  const multiples = new Set();

  for (const i of arr) {
    if (singles.has(i)) {
      singles.delete(i);
      multiples.add(i);
    }
    if (!multiples.has(i)) {
      singles.add(i);
    }

    if (singles.size === 1 && multiples.size > 0) {
      return [...singles.keys()][0];
    }
  }
  return 0;
}
