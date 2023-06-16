import { describe, it, assert } from 'vitest';

export function makeTest(
  solution: (start: string) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  function doTest(romanString: string, expected: number) {
    const actual = solution(romanString);
    assert.strictEqual(actual, expected, `for roman number ${romanString}`);
  }

  describe('Tests', () => {
    it('sample tests', () => {
      doTest('XXI', 21);
      doTest('I', 1);
      doTest('IV', 4);
      doTest('MMVIII', 2008);
      doTest('MDCLXVI', 1666);
    });
  });
}
