// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(maxAndMin, RUN_TESTS);

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {[number, number]}
 */
function maxAndMin(arr1, arr2) {
  let min = Infinity;
  let max = -1;
  const haystack = sortUniq(arr2);
  const smallest = haystack.at(0);
  const greatest = haystack.at(-1);
  if (smallest === undefined || greatest === undefined)
    throw new Error('Haystack is empty');

  for (const needle of sortUniq(arr1)) {
    const closest = findClosest(haystack, needle);
    const diff = Math.abs(closest - needle);
    if (diff < min) min = diff;
    const thisMax = Math.max(
      Math.abs(needle - smallest),
      Math.abs(needle - greatest),
    );
    if (thisMax > max) max = thisMax;
  }

  return [max, min];
}

function sortUniq(/** @type number[] */ numbers) {
  return [...new Set(numbers)].sort((a, b) => a - b);
}

/**
 * @param {number[]} arr
 * @param {number} num
 */
function findClosest(arr, num) {
  //binary search for the closest to `num`
  let [left, right] = [0, arr.length - 1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) return arr[mid];
    if (arr[mid] < num) left = mid + 1;
    else right = mid - 1;
  }

  //find closest
  if (left === 0) return arr[left];
  if (right === arr.length - 1) return arr[right];
  return Math.abs(arr[left] - num) < Math.abs(arr[right] - num)
    ? arr[left]
    : arr[right];
}
