// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(solution, RUN_TESTS);

/**
 *
 * @param {string} roman
 * @returns {number}
 */
function solution(roman) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1_000,
  };

  const parts = roman.match(/(.)\1*/g) ?? [];

  let total = 0;
  for (let i = 0; i < parts.length; i++) {
    const current = parts[i];
    const currentNumeral = numerals[current[0]];
    const next = parts[i + 1];
    if (next && currentNumeral < numerals[next[0]]) {
        total -= currentNumeral * current.length;
    } else {
        total += currentNumeral * current.length;
    }
  }
  return total;
}
