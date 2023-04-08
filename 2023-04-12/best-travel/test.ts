import { describe, it, assert } from 'vitest';

export function makeTest(
  chooseBestSum: (t: number, k: number, ls: number[]) => number | null,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('chooseBestSum', function () {
    it('Basic tests ', function () {
      var ts = [50, 55, 56, 57, 58];
      assert.equal(chooseBestSum(163, 3, ts), 163);
      ts = [50];
      assert.equal(chooseBestSum(163, 3, ts), null);
      ts = [91, 74, 73, 85, 73, 81, 87];
      assert.equal(chooseBestSum(230, 3, ts), 228);
    });
  });
}
