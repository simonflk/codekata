import { describe, expect, it } from 'vitest';

type Item = {
  weight: number;
  price: number;
};

// This is a work in prgress. It sorts the items by price per kg, then adds them
// to the result until it can't fit any more into the bag.
// If it's able to completely fill the bag, it will return the best possible
// result. Right now it can't necessarily return the best possible result if there
// is space left in the bag.
function greedyThief(items: Array<Item>, maxWeight: number) {
  const pricePerKg = (item: Item) => item.price / item.weight;
  const sorted = Array.from(items).sort(
    (a, b) => pricePerKg(b) - pricePerKg(a),
  );

  let weight = 0;
  let result: Array<Item> = [];
  for (const item of sorted) {
    if (weight + item.weight <= maxWeight) {
      weight += item.weight;
      result.push(item);
    }
  }
  return result;
}

describe('Greedy thief', function () {
  function check(items: Array<Item>, maxWeight: number, expected: Array<Item>) {
    const result = greedyThief(items, maxWeight);
    const price = (_items: Array<Item>) =>
      _items.reduce((a, b) => a + b.price, 0);

    expect(price(result)).toEqual(price(expected));
  }

  it('It should works for basic tests', function () {
    //example in description
    var items = [
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 6, price: 5 },
      { weight: 5, price: 4 },
      { weight: 4, price: 6 },
    ];
    check(items, 10, [
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 4, price: 6 },
    ]);

    //should get the max total price
    var items = [
      { weight: 9, price: 1 },
      { weight: 9, price: 2 },
      { weight: 9, price: 3 },
      { weight: 9, price: 4 },
      { weight: 9, price: 5 },
    ];
    check(items, 10, [{ weight: 9, price: 5 }]);

    //If more than one valid result, you should return one of them
    var items = [
      { weight: 1, price: 1 },
      { weight: 2, price: 2 },
      { weight: 3, price: 3 },
      { weight: 4, price: 4 },
      { weight: 5, price: 5 },
    ];
    check(items, 10, [
      { weight: 2, price: 2 },
      { weight: 3, price: 3 },
      { weight: 5, price: 5 },
    ]);

    var items = [
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 0, price: 2 },
      { weight: 10, price: 10 },
      { weight: 5, price: 5 },
    ];
    check(items, 10, [
      { weight: 0, price: 2 },
      { weight: 10, price: 10 },
    ]);

    //Weights ( prices too ) may be zero
    var items = [{ weight: 0, price: 1 }];
    check(items, 8, [{ weight: 0, price: 1 }]);

    //If no valid solution should return []
    var items = [
      { weight: 9, price: 1 },
      { weight: 9, price: 2 },
      { weight: 9, price: 3 },
      { weight: 9, price: 4 },
      { weight: 9, price: 5 },
    ];
    check(items, 8, []);
  });

  it('fails', () => {
    const items = [
      { weight: 19, price: 66 },
      { weight: 12, price: 41 },
      { weight: 2, price: 5 },
      { weight: 4, price: 54 },
      { weight: 5, price: 7 },
      { weight: 0, price: 42 },
      { weight: 7, price: 92 },
      { weight: 2, price: 70 },
      { weight: 16, price: 20 },
      { weight: 10, price: 81 },
      { weight: 14, price: 94 },
      { weight: 5, price: 56 },
      { weight: 13, price: 34 },
      { weight: 0, price: 69 },
      { weight: 12, price: 16 },
      { weight: 13, price: 6 },
      { weight: 8, price: 33 },
      { weight: 5, price: 46 },
      { weight: 16, price: 70 },
      { weight: 1, price: 35 },
      { weight: 13, price: 25 },
      { weight: 0, price: 98 },
      { weight: 0, price: 87 },
      { weight: 9, price: 2 },
      { weight: 11, price: 72 },
      { weight: 0, price: 74 },
      { weight: 8, price: 63 },
      { weight: 0, price: 8 },
      { weight: 10, price: 21 },
      { weight: 16, price: 33 },
      { weight: 0, price: 58 },
      { weight: 14, price: 44 },
      { weight: 5, price: 7 },
      { weight: 5, price: 100 },
      { weight: 4, price: 17 },
      { weight: 12, price: 83 },
    ];
    check(items, 136, [{ weight: 1, price: 1476 }]);
  });
});
