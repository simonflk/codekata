import { describe, it, assert } from 'vitest';

export function makeTest(
  solution: (a: string, b: string) => string,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Solution', function () {
    it('Should pass sample tests', function () {
      assert.equal(solution('45', '1'), '1451');
      assert.equal(solution('13', '200'), '1320013');
      assert.equal(solution('Soon', 'Me'), 'MeSoonMe');
      assert.equal(solution('U', 'False'), 'UFalseU');
    });
  });
}
