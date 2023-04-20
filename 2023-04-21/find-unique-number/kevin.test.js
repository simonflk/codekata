// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(findUniq, RUN_TESTS);

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function findUniq(arr) {
  // do magic
  
let sortedArray = arr.sort((a, b) => a - b)

for (let i = 0; i <= sortedArray.length - 1; i++){
  // i = 0 is the first entry of the first number, check to see if this is also the 
  // last occurrance of this value, if it is return it
  if (i === sortedArray.lastIndexOf(sortedArray[i])){
    return sortedArray[i]
  }
  // if we get here, we know we can  skip to the last occurance of this value
  // in the sorted array and test the next number
  i = sortedArray.lastIndexOf(sortedArray[i])
}

}
