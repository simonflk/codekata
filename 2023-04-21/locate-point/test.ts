import { describe, it, assert } from 'vitest';

type Vector = [[number, number], [number, number]];
export function makeTest(
  pointVsVector: (input: [number, number], vector: Vector) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Tests', () => {
    it('test', () => {
      const vector = [
        [0, 0],
        [1, 1],
      ] as Vector;
      assert.strictEqual(pointVsVector([0, 1], vector), -1);
      assert.strictEqual(pointVsVector([2, 2], vector), 0);
      assert.strictEqual(pointVsVector([2, 0], vector), 1);
    });
  });
}
