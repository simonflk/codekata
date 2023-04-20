// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(chooseBestSum, RUN_TESTS);

function chooseBestSum(
  maxDistance: number,
  numberOfStops: number,
  distances: number[],
) {
  const combinations = generateCombinations(distances, numberOfStops);
  const best = combinations
    .map((route) => sum(route))
    .filter((total) => total <= maxDistance)
    .sort((a, b) => b - a)[0];
  return best ?? null;
}

function sum(distances: number[]) {
  return distances.reduce((a, b) => a + b, 0);
}

function generateCombinations<T>(items: T[], n: number): T[][] {
  if (n === 0) {
    return [[]];
  }

  if (items.length === 0) {
    return [];
  }

  const [head, ...tail] = items;

  const withoutHead = generateCombinations(tail, n);
  const withHead = generateCombinations(tail, n - 1).map((combination) => [
    head!,
    ...combination,
  ]);

  return [...withoutHead, ...withHead];
}
