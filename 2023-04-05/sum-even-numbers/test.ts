import { describe, it, assert } from 'vitest';

export function makeTest(
  sumEvenNumbers: (input: number[]) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe("Tests", () => {
    it("test", () => {
      assert.strictEqual(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
    });
  });
  }
