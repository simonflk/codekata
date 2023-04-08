import { describe, it, assert } from 'vitest';

export function makeTest(
  cubeChecker: (volume: number, side: number) => boolean,
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
      assert.equal(cubeChecker(56.3, 1), false);
      assert.equal(cubeChecker(-1, 2), false);
      assert.equal(cubeChecker(8, 3), false);
      assert.equal(cubeChecker(8, 2), true);
      assert.equal(cubeChecker(-8, -2), false);
      assert.equal(cubeChecker(0, 0), false);
      assert.equal(cubeChecker(1, 5), false);
      assert.equal(cubeChecker(125, 5), true);
      assert.equal(cubeChecker(125, -5), false);
    });
  });
}
