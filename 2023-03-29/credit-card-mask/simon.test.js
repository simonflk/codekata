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
  return cc.replace(
    /(.*)(....)$/g,
    (m, secret, rest) => `${'#'.repeat(secret.length)}${rest}`,
  );
}
