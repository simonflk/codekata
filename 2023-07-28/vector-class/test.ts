import { describe, it, expect } from 'vitest';

export function makeTest(Vector: any, enabled = true) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Tests', () => {
    it('test', () => {
      var a = new Vector([1, 2]);
      var b = new Vector([3, 4]);

      expect(a.add(b).equals(new Vector([4, 6])));
    });
  });
}
