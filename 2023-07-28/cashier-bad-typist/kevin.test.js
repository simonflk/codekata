// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(getOrder, RUN_TESTS);

/**
 *
 * @param {string} input
 * @returns string
 */
function getOrder(input) {
    let order = input;
    //track the final
    let finalOrder = '';
    const items = [
      'Burger',
      'Fries',
      'Chicken',
      'Pizza',
      'Sandwich',
      'Onionrings',
      'Milkshake',
      'Coke',
    ];

    for (let i = 0; i <= items.length - 1; i++) {
      while (order.includes(items[i].toLowerCase())) {
        order = order.replace(items[i].toLowerCase(), '');
        finalOrder = finalOrder + items[i] + ' ';
      }
    }
 
    return finalOrder.trim();
  }

