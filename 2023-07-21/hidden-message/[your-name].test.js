// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = false;
makeTest(foundationMessage, RUN_TESTS);


/**
 * 
 * @param {string} message 
 * @returns {string}
 */
function foundationMessage(message) {
    return message;
}