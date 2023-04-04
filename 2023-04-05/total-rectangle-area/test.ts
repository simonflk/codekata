import { describe, it, assert } from 'vitest';

export function makeTest(
  calculate: (recs: number[][]) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('basic cases', function () {
    it('0 rectangles', function () {
      assert.strictEqual(calculate([]), 0, 'calculate([]) should return 0');
    });

    it('1 rectangle', function () {
      assert.strictEqual(
        calculate([[0, 0, 1, 1]]),
        1,
        'calculate([[0,0,1,1]]) should return 1',
      );
    });

    it('1 rectangle (version 2)', function () {
      assert.strictEqual(
        calculate([[0, 4, 11, 6]]),
        22,
        'calculate([[0, 4, 11, 6]]]) should return 22',
      );
    });

    it('2 rectangles', function () {
      assert.strictEqual(
        calculate([
          [0, 0, 1, 1],
          [1, 1, 2, 2],
        ]),
        2,
        'calculate([[0,0,1,1], [1,1,2,2]]) should return 2',
      );
    });

    it('2 rectangle (version 2)', function () {
      assert.strictEqual(
        calculate([
          [0, 0, 1, 1],
          [0, 0, 2, 2],
        ]),
        4,
        'calculate([[0,0,1,1], [0,0,2,2]]) should return 4',
      );
    });

    it('3 rectangle ', function () {
      assert.strictEqual(
        calculate([
          [3, 3, 8, 5],
          [6, 3, 8, 9],
          [11, 6, 14, 12],
        ]),
        36,
        'calculate([[3,3,8,5], [6,3,8,9],[11,6,14,12]]) should return 36',
      );
    });
  });
  describe('More fixed cases', function () {
    it('1 under 2', function () {
      assert.strictEqual(
        calculate([
          [1, 7, 3, 10],
          [1, 8, 3, 9],
        ]),
        6,
        '1 under 2',
      );
    });
    it('nested', function () {
      assert.strictEqual(
        calculate([
          [6, 7, 9, 10],
          [7, 8, 8, 9],
        ]),
        9,
        'nested',
      );
    });
    it('nested 2', function () {
      assert.strictEqual(
        calculate([
          [1, 7, 4, 10],
          [2, 7, 4, 9],
          [3, 7, 4, 9],
        ]),
        9,
        'nested 2',
      );
    });
    it('intersection up', function () {
      assert.strictEqual(
        calculate([
          [1, 1, 4, 3],
          [2, 2, 3, 4],
        ]),
        7,
        'intersection up',
      );
    });
    it('intersetion right', function () {
      assert.strictEqual(
        calculate([
          [5, 0, 7, 3],
          [6, 1, 8, 2],
        ]),
        7,
        'intersetion right',
      );
    });
    it('intersection up right', function () {
      assert.strictEqual(
        calculate([
          [9, 0, 11, 2],
          [10, 1, 12, 3],
        ]),
        7,
        'intersection up right',
      );
    });
    it('intersection down', function () {
      assert.strictEqual(
        calculate([
          [13, 1, 16, 3],
          [14, 0, 15, 2],
        ]),
        7,
        'intersection down',
      );
    });
    it('intersection down right', function () {
      assert.strictEqual(
        calculate([
          [17, 1, 19, 3],
          [18, 0, 20, 2],
        ]),
        7,
        'intersection down right',
      );
    });
    it('intersection of the entire right side', function () {
      assert.strictEqual(
        calculate([
          [13, 5, 15, 6],
          [14, 4, 16, 7],
        ]),
        7,
        'intersection of the entire right side',
      );
    });
    it('intersection 3 rect', function () {
      assert.strictEqual(
        calculate([
          [1, 3, 4, 6],
          [2, 1, 5, 4],
          [3, 2, 6, 5],
        ]),
        20,
        'intersection 3 rect',
      );
    });
    it('3*3', function () {
      assert.strictEqual(
        calculate([
          [1, 1, 2, 2],
          [2, 1, 3, 2],
          [3, 1, 4, 2],
          [1, 2, 2, 3],
          [2, 2, 3, 3],
          [3, 2, 4, 3],
          [1, 3, 2, 4],
          [2, 3, 3, 4],
          [3, 3, 4, 4],
        ]),
        9,
        '3*3',
      );
    });
    it('intersection', function () {
      assert.strictEqual(
        calculate([
          [1, 1, 6, 6],
          [1, 3, 4, 6],
          [2, 3, 4, 6],
          [2, 4, 5, 6],
          [3, 5, 4, 6],
        ]),
        25,
        'intersection',
      );
    });
    it('shift right', function () {
      assert.strictEqual(
        calculate([
          [1, 1, 6, 6],
          [2, 1, 6, 6],
          [3, 1, 6, 6],
          [4, 1, 6, 6],
          [5, 2, 6, 5],
        ]),
        25,
        'shift right',
      );
    });
    it('shift right down', function () {
      assert.strictEqual(
        calculate([
          [1, 1, 7, 6],
          [2, 2, 8, 7],
          [3, 3, 9, 8],
          [4, 4, 10, 9],
          [5, 5, 11, 10],
        ]),
        70,
        'shift right down',
      );
    });
    it('wings', function () {
      assert.strictEqual(
        calculate([
          [1, 4, 5, 6],
          [2, 5, 6, 7],
          [3, 6, 7, 8],
          [4, 7, 8, 9],
          [2, 3, 6, 5],
          [3, 2, 7, 4],
          [4, 1, 8, 3],
        ]),
        38,
        'wings',
      );
    });
    it('intersection cross', function () {
      assert.strictEqual(
        calculate([
          [9, 5, 12, 6],
          [10, 4, 11, 7],
        ]),
        5,
        'intersection cross',
      );
    });
    it('intersection 2', function () {
      assert.strictEqual(
        calculate([
          [7, 1, 11, 7],
          [8, 0, 12, 3],
          [8, 4, 13, 5],
          [9, 5, 14, 8],
          [10, 2, 15, 6],
        ]),
        53,
        'intersection 2',
      );
    });
    it('pyramid', function () {
      assert.strictEqual(
        calculate([
          [1, 2, 6, 6],
          [1, 3, 5, 5],
          [1, 1, 7, 7],
        ]),
        36,
        'pyramid',
      );
    });
    it('circle', function () {
      assert.strictEqual(
        calculate([
          [1, 2, 3, 7],
          [2, 1, 7, 3],
          [6, 2, 8, 7],
          [2, 6, 7, 8],
          [4, 4, 5, 5],
        ]),
        37,
        'circle',
      );
    });
    it('one', function () {
      assert.strictEqual(
        calculate([
          [1, 1, 2, 2],
          [1, 1, 2, 2],
          [1, 1, 2, 2],
          [1, 1, 2, 2],
          [1, 1, 2, 2],
          [1, 1, 2, 2],
        ]),
        1,
        'one',
      );
    });
    it('very hard!', function () {
      assert.strictEqual(
        calculate([
          [3, 3, 6, 5],
          [4, 4, 6, 6],
          [4, 3, 7, 5],
          [4, 2, 8, 5],
          [4, 3, 8, 6],
          [9, 0, 11, 4],
          [9, 1, 10, 6],
          [9, 0, 12, 2],
          [10, 1, 13, 5],
          [12, 4, 15, 6],
          [14, 1, 16, 5],
          [12, 1, 17, 2],
        ]),
        52,
        'very hard!',
      );
    });
    it('waterfall', function () {
      assert.strictEqual(
        calculate([
          [2, 2, 17, 2],
          [2, 2, 17, 4],
          [2, 2, 17, 6],
          [2, 2, 17, 8],
          [2, 2, 17, 10],
          [2, 2, 17, 12],
          [2, 2, 17, 14],
          [2, 2, 17, 16],
          [2, 2, 17, 18],
          [2, 2, 17, 20],
          [2, 2, 17, 22],
          [2, 2, 17, 24],
          [2, 2, 17, 26],
          [2, 2, 17, 28],
        ]),
        390,
        'waterfall',
      );
    });
  });
}
