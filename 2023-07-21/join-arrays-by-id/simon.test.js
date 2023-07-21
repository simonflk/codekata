// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(joinArraysById, RUN_TESTS);

/**
 * @typedef {object} Obj
 * @property {number} id - An id.
 */

/**
 *
 * @param {Array<Obj>} arr1
 * @param {Array<Obj>} arr2
 * @returns {Array<Obj>}
 */
function joinArraysById(arr1, arr2) {
  const items = new Map(arr1.map((item) => [item.id, item]));
  for (const item2 of arr2) {
    const item1 = items.get(item2.id);
    if (item1) {
      const { id, ...rest } = item2;
      Object.assign(item1, rest);
    } else {
      items.set(item2.id, item2);
    }
  }
  return Array.from(items.values()).sort((a, b) => a.id - b.id);
}
