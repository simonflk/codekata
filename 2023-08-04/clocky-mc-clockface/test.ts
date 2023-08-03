import { describe, it, assert } from 'vitest';

export function makeTest(
  whatTimeIsIt: (input: number) => string,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Solution', function () {
    describe('Example Tests', function () {
      it('ex1', function () {
        assert.equal(whatTimeIsIt(0), '12:00');
      });

      it('ex2', function () {
        assert.equal(whatTimeIsIt(90), '03:00');
      });

      it('ex3', function () {
        assert.equal(whatTimeIsIt(180), '06:00');
      });

      it('ex4', function () {
        assert.equal(whatTimeIsIt(270), '09:00');
      });

      it('ex5', function () {
        assert.equal(whatTimeIsIt(360), '12:00');
      });
    });
  });
}
