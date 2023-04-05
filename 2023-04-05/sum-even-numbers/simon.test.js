// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(sumEvenNumbers, RUN_TESTS);

/**
 * @param {number[]} input
 */
export function sumEvenNumbers(input) {
  let sum = 0;
  for (const i of input) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}


/**
 * @param {number[]} input
 */
export function sumEvenNumbersWithReduce(input) {
  return input.reduce((acc, current) => current % 2 ? acc : acc + current, 0);
}