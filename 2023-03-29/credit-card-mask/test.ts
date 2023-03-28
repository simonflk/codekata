import { describe, it, assert, TestAPI } from 'vitest';

export function makeTest(
  maskify: (cc: string) => string,
  enabled = true,
) {
  if (!enabled) {
    describe('Tests', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe("maskify", function(){
    it("should work for some examples", function(){
      assert.equal(maskify('4556364607935616'), '############5616');
      assert.equal(maskify('1'), '1');
      assert.equal(maskify('11111'), '#1111');
    });
  });}
