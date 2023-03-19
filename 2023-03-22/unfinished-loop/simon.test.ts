import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(createArray, RUN_TESTS);

function createArray(number: number) {
  return Array.from({ length: number }, (_, i) => i+1);
}
