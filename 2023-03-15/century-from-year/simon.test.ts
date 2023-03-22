import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(centuryFromYear, RUN_TESTS);

export function centuryFromYear(year: number): number {
  return Math.floor((year - 1) / 100) + 1;
}
