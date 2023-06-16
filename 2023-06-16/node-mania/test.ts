import { describe, it, assert } from 'vitest';

type Node = {
  data: number;
  next: Node;
} | null;

function buildList(values: [number, ...number[]]) {
  return values.reduceRight(
    (next: Node, data) => ({ data, next }),
    null,
  ) as Node;
}

export function makeTest(
  searchKFromEnd: (linkedList: Node, k: number) => number | null,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Tests', () => {
    it('Sample tests', () => {
      assert.strictEqual(
        searchKFromEnd(buildList([5, 2, 3, 1]), 2),
        3,
        'Failed for 5 -> 2 -> (3) -> 1, k = 2',
      );
      assert.strictEqual(
        searchKFromEnd(buildList([5, 2, 3, 1]), 1),
        1,
        'Failed for 5 -> 2 -> 3 -> (1), k = 1',
      );
      assert.strictEqual(
        searchKFromEnd(
          buildList([
            19, 18, 17, 16, 4, 3, 4, 2, 1, 65, 23, 3, 12, 34, 2, 6, 2,
          ]),
          7,
        ),
        23,
        'Failed for 19 -> 18 -> 17 -> 16 -> 4 -> 3 -> 4 -> 2 -> 1 -> 65-> (23) -> 3 -> 12 -> 34 -> 2 -> 6 -> 2, k = 7',
      );
      assert.strictEqual(
        searchKFromEnd(buildList([3, 2, 1, 5]), 5),
        null,
        'Failed for 3 -> 2 -> 1 -> 5, k = 5\n remember if it is outside the bounds of list to return null',
      );
    });
  });
}
