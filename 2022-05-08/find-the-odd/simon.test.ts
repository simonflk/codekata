import { describe, expect, it } from 'vitest';

// One solution to this might be to build up a map of numbers to counts, then
// find the number with an odd count. This would require a subsequent loop to
// find the odd count. I wanted to see if I could do it in one loop.
// I am curious to test the performance of this solution against the other
// solutions - Although this has only one loop, it does up to 2 set mutations in each
// loop, which could be expensive.
function findOdd(input: Array<number>) {
  const odds = new Set<number>();
  for (const i of input) {
    if (odds.has(i)) {
      odds.delete(i);
    } else {
      odds.add(i);
    }
  }
  return Array.from(odds)[0];
}


describe('Find the odd int', () => {
  function doTest(numbers: Array<number>, expected: number) {
    expect(findOdd(numbers)).toEqual(expected);
  }

  it('Example tests', () => {
    doTest([7], 7);
    doTest([0], 0);
    doTest([1, 1, 2], 2);
    doTest([0, 1, 0, 1, 0], 0);
    doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4);
  });

  it('Fixed tests', () => {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
  });
});
