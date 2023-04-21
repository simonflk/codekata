// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(converter, RUN_TESTS);

const KM_PER_MILE = 1.609344;
const L_PER_GALLON = 4.54609188;

/**
 * @param {number} mpg
 * @returns {number}
 */
function converter(mpg) {
  return parseFloat((mpg * KM_PER_MILE / L_PER_GALLON).toFixed(2));
}
