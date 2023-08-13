// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(totalIncDec, RUN_TESTS);

/**
 * @typedef {Set<number>} IncDecNumbers
 * @typedef {Map<number, IncDecNumbers>} PowersOfTenCache
 */

/** @type {PowersOfTenCache} */
const cache = new Map([
  [0, new Set([0])],
  [1, new Set(range(1, 9))],
]);

function range(start = 0, end = 9, step = 1) {
  if (start > end) step = -step;
  const length = Math.abs(end - start) + 1;
  return [...Array(length)].map((_, i) => i * step + start);
}

/**
 * @param {number} x
 */
function totalIncDec(x) {
  let total = 0;
  while (x >= 0) {
    total += getNumbersForPower(x).size || 0;
    x--;
  }

  return total;

  function getNumbersForPower(/** @type {number} */ n) {
    /** @type {IncDecNumbers} */
    const thisPower = cache.get(n) ?? new Set();
    if (thisPower.size) return thisPower;

    // We need to calculate this power
    const previousPower = getNumbersForPower(n - 1);
    for (const num of [...previousPower]) {
      const firstDigit = Math.floor(num / 10 ** (n - 2));
      const lastDigit = num % 10;

      const numbersToAdd =
        firstDigit === lastDigit
          ? range()
          : firstDigit > lastDigit
          ? range(lastDigit, 0)
          : range(lastDigit);
      numbersToAdd.forEach((digit) => {
        thisPower.add(num * 10 + digit);
      });
    }

    cache.set(n, thisPower);
    return thisPower;
  }
}
