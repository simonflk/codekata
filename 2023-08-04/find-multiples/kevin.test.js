// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(findMultiples, RUN_TESTS);


/**
 * @param {number} integer 
 * @param {number} limit 
 */
function findMultiples(integer, limit) {
   let returnNumbers = []
   const loopsNeeded = Math.floor(limit / integer)
   for (let i = 1; i <= loopsNeeded; i++){
     returnNumbers.push(i * integer)
   }
   return returnNumbers
  }
  

