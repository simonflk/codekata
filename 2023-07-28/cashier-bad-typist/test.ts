import { describe, it, assert } from 'vitest';

export function makeTest(getOrder: (input: string) => string, enabled = true) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Solution', function () {
    it('Example Tests', function () {
      assert.equal(
        getOrder(
          'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza',
        ),
        'Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke',
      );
      assert.equal(
        getOrder('pizzachickenfriesburgercokemilkshakefriessandwich'),
        'Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke',
      );
    });
  });
}
