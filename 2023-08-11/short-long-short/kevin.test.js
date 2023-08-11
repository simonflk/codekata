// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(solution, RUN_TESTS);


/**
 * @param {string} a
 * @param {string} b
 */
function solution(a, b){
  const longy = a.length > b.length ? a : b
  const shorty = longy === a ? b : a
  return shorty + longy + shorty
}
