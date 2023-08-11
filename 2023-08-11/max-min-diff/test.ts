import { describe, it, assert } from 'vitest';

export function makeTest(
  maxAndMin: (arr1: number[], arr2: number[]) => [number, number],
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Solution', function () {
    it('It should works for basic tests', function () {
      assert.deepEqual(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2]);
      assert.deepEqual(maxAndMin([3], [20]), [17, 17]);
      assert.deepEqual(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0]);
      assert.deepEqual(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1]);
    });
  });
}
