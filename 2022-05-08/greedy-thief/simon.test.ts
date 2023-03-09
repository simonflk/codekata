import { describe, expect, it } from 'vitest';

type Item = {
  weight: number;
  price: number;
};

type SearchResult = { items: Array<Item>; weight: number; price: number };

/**
 * A recursive function that returns the best combination of items that can be
 * carried in a bag with a given capacity. The cache and recursive functions
 * are scoped to the greedyThief function, so they are not accessible outside
 * of the function, and can be garbage collected appropriately and be recreated
 * each time the function is called.
 */
function greedyThief(items: Array<Item>, maxWeight: number) {
  // A scoped cache array that is used to store the results of previous
  // recursive calls. The cache is indexed by the current index and
  // capacity, and stores the result of the recursive call.
  const cache: Array<SearchResult[]> = [];

  // The chooseItems function first checks if the result for the
  // current index and capacity is already cached in the cache array.
  // If it is, the cached result is returned.
  //
  // If the result is not cached, the function calculates the optimal
  // combination of items to pack by recursively calling itself twice:
  // once assuming the current item is not included in the knapsack,
  // and once assuming it is included in the knapsack. The function
  // then chooses the option that results in the highest total price,
  // given the weight capacity of the knapsack.
  function chooseItems(
    items: Array<Item>,
    capacity: number,
    currentIndex = 0,
  ): SearchResult {
    const cached = cache[currentIndex]?.[capacity];
    if (cached !== undefined) {
      return cached;
    }
    const currentItem = items[currentIndex];

    if (currentItem === undefined || currentIndex >= items.length) {
      return { items: [], weight: 0, price: 0 };
    }

    // the result assuming we don't add the currentItem
    let result = chooseItems(items, capacity, currentIndex + 1);

    // Evaluate adding the current item if there is enough capacity
    if (currentItem.weight <= capacity) {
      const withThisItem = chooseItems(
        items,
        capacity - currentItem.weight,
        currentIndex + 1,
      );
      if (currentItem.price + withThisItem.price > result.price) {
        result = {
          items: [currentItem, ...withThisItem.items],
          weight: currentItem.weight + withThisItem.weight,
          price: currentItem.price + withThisItem.price,
        };
      }
    }
    cache[currentIndex] = cache[currentIndex] ?? [];
    cache[currentIndex]![capacity] = result;
    return result;
  }

  const result = chooseItems(items, maxWeight);
  return result.items;
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

  it('is complicated', () => {
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
