// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(pointVsVector, RUN_TESTS);

type Point = [x: number, y: number];
type Vector = [start: Point, end: Point];

function pointVsVector(point: Point, vector: Vector): -1 | 0 | 1 {
  const [start, end] = vector;
  const vectorAngle = Math.atan2(end[1] - start[1], end[0] - start[0]);
  const pointAngle = Math.atan2(point[1] - start[1], point[0] - start[0]);

  // Normalize the relative angle to be between -π and π
  let relativeAngle = pointAngle - vectorAngle;
  while (relativeAngle <= -Math.PI) {
    relativeAngle += 2 * Math.PI;
  }
  while (relativeAngle > Math.PI) {
    relativeAngle -= 2 * Math.PI;
  }

  if (Math.round(relativeAngle * 1000) === 0) {
    // This is a hack and doesn't really work
    return 0;
  }
  return relativeAngle > 0 ? -1 : relativeAngle < 0 ? 1 : 0;
}
