// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(whatTimeIsIt, RUN_TESTS);


/**
 * @param {number} angle 
 */
function whatTimeIsIt (angle) {
  const hours = Math.floor(angle/30)
  const formattedHours = hours === 0 ? 12 : hours < 10 ? '0' + hours.toString() : hours
  const mins = Math.floor(((angle % 30) / 30) * 60)
  const formattedMins = mins === 0 ? '00' : mins
  return `${formattedHours}:${formattedMins}`;
}