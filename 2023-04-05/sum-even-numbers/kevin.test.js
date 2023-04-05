// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(sumEvenNumbers, RUN_TESTS);

/**
 * 
 * @param {number[]} input 
 */
export function sumEvenNumbers(input) {
  let counter = 0

  const evenNumberArray = input.filter((number)=>number % 2 === 0)
    .map((number) => counter += number )

  return counter
}
