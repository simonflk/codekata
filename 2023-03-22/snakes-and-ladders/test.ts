import { describe, it, assert } from 'vitest';

export function makeTest(
  snakesAndLadders: (board: number[], dice: number[]) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Tests', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('ExampleTests', function () {
    it('example', function () {
      var dice = [2, 1, 5, 1, 5, 4];
      var board = [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 10);
    });
  });
}
