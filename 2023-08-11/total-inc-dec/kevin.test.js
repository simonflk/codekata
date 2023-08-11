// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(totalIncDec, RUN_TESTS);

/**
 * @param {number} x
 */
function totalIncDec(x) {
  //your code here

  const startNumber = 10 ** x;
  let nonBouncyDigits = [];

  let numbersArray = [...Array(startNumber).keys()];

  numbersArray.forEach((number, index) => {
    let isBouncy = false;
    let direction = null;
    //figure if each value is bouncy by splitting each value into digits and doing a comparison
    number
      .toString()
      .split('')
      .map((stringnumber) => Number(stringnumber))
      .forEach((singleNumber, index) => {
        if (direction === null) {
          if (singleNumber > Number(number[index + 1])) {
            direction = 'down';
          } else if (singleNumber < Number(number[index + 1])) {
            direction = 'up';
          }
        }
        
        if (
          (direction === 'up' && singleNumber > Number(number[index + 1])) ||
          (direction === 'down' && singleNumber < Number([index + 1]))
        ) {
          isBouncy = true;
        }
      });

    if (!isBouncy) {
      nonBouncyDigits.push(number);
    }
  });

  return nonBouncyDigits.length;
}
