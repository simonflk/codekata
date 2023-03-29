// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(orderWeight, RUN_TESTS);

function orderWeight(strng: string) {
  const values = strng.trim().split(/\s+/);
  const sorted = values
    .map((value) => ({ value, weight: getWeight(value) }))
    .sort((a, b) => {
      const weightDiff = a.weight - b.weight;
      return weightDiff || a.value.localeCompare(b.value);
    })
    .map((tx) => tx.value);
  return sorted.join(' ');
}

function getWeight(num: string) {
  const digits = num.replace(/\D/g, '').split('').map(Number);
  return digits.reduce((acc, current) => (acc += current), 0);
}
