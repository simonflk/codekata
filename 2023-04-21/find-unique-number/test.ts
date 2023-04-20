import { describe, it, assert } from 'vitest';

export function makeTest(
  findUniq: (input: number[]) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe("Example Tests", () => {
    it("Tests", () => {
      assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
      assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
      assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
      assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
      assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
      assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
    });
  });
  }
