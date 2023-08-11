// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(maxAndMin, RUN_TESTS);


/**
 * @param {number[]} arr1 
 * @param {number[]} arr2
 * @returns {[number, number]}
 */
function maxAndMin(arr1,arr2){
  let greatestDiff = -Infinity
  let smallestDiff = Infinity

  arr1.forEach((number)=>{
    for (let i=0; i<=arr2.length - 1; i++){
      const diff = Math.abs(number - arr2[i])
      if (diff > greatestDiff){
        greatestDiff = diff
      }
      if (diff < smallestDiff){
        smallestDiff = diff
      }
    }
  })

return [greatestDiff, smallestDiff]
}