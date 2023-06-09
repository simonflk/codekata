// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(solution, RUN_TESTS);

/**
 * 
 * @param {number} start 
 * @param {number} finish 
 * @returns {number}
 */
function solution(start, finish) 
{
  if (start === finish) return 0;
  if (finish === start + 1) return 1;
  if (finish === start + 2) return 2;
  if (finish === start + 3) return 1;
  return 1 + solution(start + 3, finish);
}