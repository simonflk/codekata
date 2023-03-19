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
      let dice = [2, 1, 5, 1, 5, 4];
      let board = [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 10);
    });

    it('noMovesPossible', function () {
      let dice = [6, 6, 6, 6, 6, 6];
      let board = [0, 0, 0, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 0);
    });

    it('noDice', function () {
      let board = [0, 0, 0, 0, 0];
      assert.strictEqual(snakesAndLadders(board, []), 0);
    });

    it('fallShort', function () {
      let dice = [1, 1, 1];
      let board = [0, 0, 0, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 3);
    });

    it('overshoot', function () {
      let dice = [1, 1, 1, 6];
      let board = [0, 0, 0, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 3);
    });

    it('win', function () {
      let dice = [1, 2, 3];
      let board = [0, 0, 0, 0, 0, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 6);
    });

    it('snakes', function () {
      let dice = [4, 4];
      let board = [0, 0, 0, 0, -2, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 6);
    });

    it('ladders', function () {
      let dice = [1, 1];
      let board = [0, 1, 0, 1, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 4);
    });

    it('ladderToFinal', function () {
      let dice = [1, 1];
      let board = [0, 4, 0, 0, 0, 0];
      assert.strictEqual(snakesAndLadders(board, dice), 5);
    });

    it('snakesAndLadders', function () {
      let dice = [1, 2, 3, 4, 5, 6];
      assert.strictEqual(
        snakesAndLadders([0, 5, 0, 0, 0, 0, 0, 0, -4, 0, 0], [...dice]),
        7,
      );
      assert.strictEqual(
        snakesAndLadders([0, 2, 0, 0, 0, -2, 0, 0, 0, 0], [...dice]),
        6,
      );
      assert.strictEqual(
        snakesAndLadders([0, 0, 6, 0, 0, 0, -2, 0, -5, 0, 0], [...dice]),
        9,
      );
      assert.strictEqual(
        snakesAndLadders([0, 1, 0, 0, -2, -3, -4, -4, 0, 0], [...dice]),
        9,
      );
      assert.strictEqual(
        snakesAndLadders([0, 3, 0, 0, 0, 0, -4, 2, 0, 0], [...dice]),
        9,
      );
    });
  });
}
