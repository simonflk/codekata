import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(repeatStr, RUN_TESTS);

export function repeatStr(n: number, s: string): string {
  return s.repeat(n);
}