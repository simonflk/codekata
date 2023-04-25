import { describe, it, assert } from 'vitest';

export function makeTest(
  flattenAndSort: (arr: Array<number[]>) => number[],
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Example test cases', function () {
    it('Should pass example tests', function () {
      assert.deepEqual(flattenAndSort([]), []);
      assert.deepEqual(flattenAndSort([[], []]), []);
      assert.deepEqual(flattenAndSort([[], [1]]), [1]);
      assert.deepEqual(
        flattenAndSort([
          [3, 2, 1],
          [7, 9, 8],
          [6, 4, 5],
        ]),
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
      );
      assert.deepEqual(
        flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]),
        [1, 2, 3, 4, 5, 6, 100],
      );
    });
  });
}
