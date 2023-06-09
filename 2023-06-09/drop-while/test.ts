import { describe, it, assert } from 'vitest';

export function makeTest(
  dropWhile: <T>(arr: T[], pred: (val: T) => boolean) => T[],
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('the dropWhile function', function () {
    function isEven(num: number) {
      return num % 2 === 0;
    }

    var isEvenTests = [
      [
        [2, 6, 4, 10, 1, 5, 4, 3],
        [1, 5, 4, 3],
      ],
      [
        [2, 100, 1000, 10000, 5, 3, 4, 6],
        [5, 3, 4, 6],
      ],
      [[2, 4, 10, 100, 64, 78, 92], []],
    ];

    it('should be defined', function () {
      assert.sameOrderedMembers(dropWhile([], isEven), []);
    });

    it('should work when testing for even numbers', function () {
      isEvenTests.forEach(function (val, ind, arr) {
        assert.sameOrderedMembers(dropWhile(val[0] as number[], isEven), val[1] as number[]);
      });
    });
  });
}
