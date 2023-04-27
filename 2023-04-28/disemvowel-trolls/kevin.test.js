// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(disemvowel, RUN_TESTS);

/**
 * @param {string} str
 */
function disemvowel(str) {
  const regex = /[aeiouAEIOU]/;
  const returnString = str
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((letter) => letter.replace(regex, ''))
        .join(''),
    )
    .join(' ');

  return returnString;
}
