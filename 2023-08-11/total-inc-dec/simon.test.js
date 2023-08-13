// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(totalIncDec, RUN_TESTS);

// For each power of 10 keep track of the number of
// increasing and decreasing numbers that *end* with
// each digit. The index of the array is the power of 10
const increasing = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const decreasing = structuredClone(increasing);
const allDigits = [0,1,2,3,4,5,6,7,8,9]

/**
 * @param {number} x
 */
function totalIncDec(x) {
  let total = 0;
  const sum = (/**@type {number[]} */ arr) => arr.reduce((a, b) => a + b, 0);
  while (x >= 0) {
    const [inc, dec] = getNumbersForPower(x);
    const overlapCount = x ? 9 : 1; // number of items in both lists
    total += sum(inc) + sum(dec) - overlapCount;
    x--;
  }

  return total;

  /**
   * @param {number} n
   * @returns [number[], number[]]
   */
  function getNumbersForPower(n) {
    const thisInc = increasing[n];
    const thisDec = decreasing[n];
    if (thisInc && thisDec) return [thisInc, thisDec];

    const [prevInc, prevDec] = getNumbersForPower(n - 1);
    const inc = allDigits.map((digit) => {
      // sum of all previous power's ending digits up to and
      // including this one
      return sum(prevInc.slice(0, digit + 1));
    });
    const dec = allDigits.map((digit) => {
      // Sum of all previous power's ending digits starting
      // with this one
      return sum(prevDec.slice(digit));
    });

    increasing[n] = inc;
    decreasing[n] = dec;

    /** @type {[number[], number[]]} */
    const thisPower = [inc, dec];
    return thisPower;
  }
}
