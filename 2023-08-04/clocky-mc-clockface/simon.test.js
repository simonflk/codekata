// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(whatTimeIsIt, RUN_TESTS);

/**
 * @param {number} angle
 */
function whatTimeIsIt(angle) {
  const degH = 360 / 12;
  const degM = degH / 60;
  const hour = Math.floor(angle / degH) || 12;
  const minute = Math.floor((angle % degH) / degM);
  const pad = (/** @type {number} */ n) => String(n).padStart(2, '0');
  return `${pad(hour)}:${pad(minute)}`;
}
