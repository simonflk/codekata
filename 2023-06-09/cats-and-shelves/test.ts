import { describe, it, assert } from 'vitest';

export function makeTest(
  solution: (start: number, finish: number) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Example test cases', function () {
    it('Test case in description', function () {
      assert.strictEqual(solution(1, 5), 2);
    });
  });
}
