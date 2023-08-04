import { describe, it, assert, expect } from 'vitest';

type Spells = Record<string, () => unknown>;
interface IWandConstructor {
  new (options?: Spells): any;
}

export function makeTest(Wand: IWandConstructor, enabled = true) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('The Wand constructor', function () {
    it('should return an instance of the Wand class', function () {
      expect(new Wand()).toBeInstanceOf(Wand);
    });

    it('should correctly add spells to a wand', function () {
      const w = new Wand({
        peskipiksiPesternomi: function () {},
      });
      assert.equal(typeof w.peskipiksiPesternomi, 'function');
    });
  });

  describe('The prioriIncantatem method', function () {
    it('should naively work', function () {
      const w = new Wand({
        expelliarmus: function () {},
        alohomora: function () {},
        avadaKedavra: function () {},
      });

      w.alohomora?.();
      w.expelliarmus;
      w.avadaKedavra?.();

      assert.deepEqual(w.prioriIncantatem(), ['avadaKedavra', 'alohomora']);
    });
  });
}
