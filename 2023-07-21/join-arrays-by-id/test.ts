import { describe, it, assert } from 'vitest';

type Obj = { id: number; [key: string]: any };

export function makeTest(
  joinArraysById: (arr1: Obj[], arr2: Obj[]) => Obj[],
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('joinArraysById', () => {
    it('should include single objects with unique ids', () => {
      const arr1 = [
        { id: 1, x: 1 },
        { id: 2, x: 9 },
      ];
      const arr2 = [
        { id: 3, y: 2 },
        { id: 4, z: 3 },
      ];
      const output = [
        { id: 1, x: 1 },
        { id: 2, x: 9 },
        { id: 3, y: 2 },
        { id: 4, z: 3 },
      ];
      assert.deepEqual(joinArraysById(arr1, arr2), output);
    });

    it('should join objects with duplicate ids and no duplicate keys', () => {
      const arr1 = [
        { id: 2, x: 9 },
        { id: 1, x: 1 },
      ];
      const arr2 = [
        { id: 2, y: 2 },
        { id: 3, z: 3 },
      ];
      const output = [
        { id: 1, x: 1 },
        { id: 2, x: 9, y: 2 },
        { id: 3, z: 3 },
      ];
      assert.deepEqual(joinArraysById(arr1, arr2), output);
    });

    it('should join objects with duplicate ids and duplicate keys', () => {
      const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
      const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
      const output = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }];

      assert.deepEqual(joinArraysById(arr1, arr2), output);
    });
  });
}
