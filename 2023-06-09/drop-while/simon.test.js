// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(dropWhile, RUN_TESTS);

/**
 * @template T
 * @param {T[]} arr
 * @param {(val: T) => boolean} pred
 * @returns {T[]}
 */
function dropWhile(arr, pred) {
  for(var i = 0; i < arr.length && pred(arr[i]); i++);
  return arr.slice(i);
}

function dropWhile_findIndex(arr, pred) {
  const index = arr.findIndex((val) => !pred(val));
  return index === -1 ? [] : arr.slice(index);
}
