import { describe, it, assert } from 'vitest';

export function makeTest(
  converter: (input: number) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Tests', () => {
    it('test', () => {
      assert.equal(converter(10), 3.54);
      assert.equal(converter(20), 7.08);
      assert.equal(converter(30), 10.62);
    });
  });
}
