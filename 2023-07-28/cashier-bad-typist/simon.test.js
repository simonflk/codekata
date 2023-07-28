// // @ts-check
import { makeTest } from './test';

// //? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(getOrder, RUN_TESTS);

const menu = [
  'Burger',
  'Fries',
  'Chicken',
  'Pizza',
  'Sandwich',
  'Onionrings',
  'Milkshake',
  'Coke',
];

/**
 * @param {string} input
 */
function getOrder(input) {
  const orderPad = Object.fromEntries(menu.map((item) => [item, 0]));
  const rx = new RegExp(menu.join('|'), 'gi');
  const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
  const items = input.match(rx);
  for (const item of items) {
    orderPad[ucFirst(item)] += 1;
  }

  let order = [];
  for (let [name, count] of Object.entries(orderPad)) {
    if (count) {
      while (count--) order.push(name);
    }
  }
  return order.join(' ');
}
