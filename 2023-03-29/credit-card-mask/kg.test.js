// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(maskify, RUN_TESTS);

/**
 * Return the masked string
 * @param {string} cc
 */
function maskify(cc) {
  //cant just index into a string a reassign the character, even though string has some other array like methods
  let newCC = '';
  for (let i = 0; i <= cc.length - 1; i++) {
    if (i < cc.length - 4) {
      newCC += '#';
    } else {
      newCC += cc.charAt(i);
    }
  }
  return newCC;
}
