import { describe, it, assert } from 'vitest';

export type Circle = {
  center: {
    x: number;
    y: number;
  };
  radius: number;
};

export function makeTest(
  distanceBetweenCircles: (x: Circle, y: Circle) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Tests', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  const point = (x: number, y: number) => ({ x, y });
  const circle = (center: ReturnType<typeof point>, radius: number) => ({
    center,
    radius,
  });

  describe('Example tests', function () {
    var a, b;

    a = circle(point(10, 60), 11);
    b = circle(point(40, 20), 7);
    assert.equal(distanceBetweenCircles(a, b), 32);

    a = circle(point(10, 60), 40);
    b = circle(point(40, 20), 40);
    assert.equal(distanceBetweenCircles(a, b), 0);

    a = circle(point(100, 100), 50);
    b = circle(point(102, 110), 10);
    assert.equal(distanceBetweenCircles(a, b), 0);
  });
}
