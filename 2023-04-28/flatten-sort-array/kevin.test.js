// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(flattenAndSort, RUN_TESTS);

/**
 * @param {Array<number[]>} array 
 * @returns {number[]}
 */
function flattenAndSort(array) {
  // Good luck, brave code warrior!

  const flattenedAndSorta = array.flat(2).sort((a, b)=> a - b)
  return flattenedAndSorta
}