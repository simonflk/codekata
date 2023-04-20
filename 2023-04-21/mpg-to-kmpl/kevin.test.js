// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(converter, RUN_TESTS);

/**
 * @param {number} mpg
 * @returns {number}
 */
function converter(mpg) {
  //code to convert miles per imperial gallon to kilometers per liter

  // (miles / 1g) * ( 1g / 4.54609188 litres ) * ( 1.609344 kilometres / mile )
  let fullNumber = ((mpg * 1.609344) / 4.54609188) * 100;
  let rounded = Math.round(fullNumber);
  return rounded / 100;
}
