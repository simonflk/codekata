import { describe, it, assert } from 'vitest';

export function makeTest(
  exchangeSort: (sequence: number[]) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Basic Tests', function () {
    it('It should works for basic tests.', function () {
      assert.equal(exchangeSort([7, 7, 8, 8, 9, 9]), 0);
      assert.equal(exchangeSort([9, 7, 8, 8, 9, 7]), 1);
      assert.equal(exchangeSort([8, 8, 7, 9, 9, 9, 8, 9, 7]), 4);
      assert.equal(
        exchangeSort([9, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7]),
        6,
      );
      assert.equal(exchangeSort([9, 9, 9, 7, 7, 8, 9, 7, 8, 9, 7, 9]), 4);
      assert.equal(exchangeSort([9, 9, 7, 7, 8, 8]), 4);

      assert.equal(exchangeSort([9, 7, 9]), 1);
      assert.equal(exchangeSort([8, 7, 8]), 1);
      assert.equal(exchangeSort([7, 8, 7, 8]), 1);
      assert.equal(exchangeSort([8, 8, 7, 8]), 1);
      assert.equal(exchangeSort([8, 8, 7, 7, 8]), 2);
    });
  });
}
