import { describe, it, assert } from 'vitest';

export function makeTest(
  totalIncDec: (int: number) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Solution', function () {
    it("Small Numbers",function(){
      assert.equal(totalIncDec(0),1);
      assert.equal(totalIncDec(1),10);
      assert.equal(totalIncDec(2),100);
      assert.equal(totalIncDec(3),475);
      assert.equal(totalIncDec(4),1675);
    })
  });
}
