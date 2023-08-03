import { describe, it, assert } from 'vitest';

export function makeTest(
  findMultiples: (int: number, limit: number) => number[],
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Solution', function () {
    it('Basic Tests', () => {
      assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25]);
      assert.sameOrderedMembers(findMultiples(1, 2), [1, 2]);
      assert.sameOrderedMembers(findMultiples(5, 7), [5]);
      assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
      assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44]);
    });
  });
}
