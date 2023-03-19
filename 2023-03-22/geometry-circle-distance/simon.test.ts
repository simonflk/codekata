import { makeTest, Circle } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(distanceBetweenCircles, RUN_TESTS);

function distanceBetweenCircles(a: Circle, b: Circle) {
  const deltaX = a.center.x - b.center.x;
  const deltaY = a.center.y - b.center.y;
  const distance = Math.hypot(deltaX, deltaY);
  const radiusSum = a.radius + b.radius;
  return Math.max(0, distance - radiusSum);
}
