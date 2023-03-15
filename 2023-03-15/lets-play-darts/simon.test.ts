import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(getDartboardScore, RUN_TESTS);

const RADIUS = {
  BULLS_EYE: 12.7 / 2,
  BULL: 31.8 / 2,
  TRIPPLE_INNER: 198 / 2,
  TRIPPLE_OUTER: 214 / 2,
  DOUBLE_INNER: 324 / 2,
  DOUBLE_OUTER: 340 / 2,
} as const;

const SCORES = [
  6, 13, 13, 4, 4, 18, 18, 1, 1, 20, 20, 5, 5, 12, 12, 9, 9, 14, 14, 11, 11, 8,
  8, 16, 16, 7, 7, 19, 19, 3, 3, 17, 17, 2, 2, 15, 15, 10, 10, 6,
];

const SEGMENT_ANGLE = 360 / SCORES.length;

function getDartboardScore(x: number, y: number) {
  const distance = Math.sqrt(x * x + y * y);
  if (distance >= RADIUS.DOUBLE_OUTER) return 'X';
  if (distance <= RADIUS.BULLS_EYE) return 'DB';
  if (distance <= RADIUS.BULL) return 'SB';
  const angle = (Math.atan2(y, x) * 180) / Math.PI;
  const segment = Math.floor(angle / SEGMENT_ANGLE);
  const score = SCORES.at(segment);

  if (distance <= RADIUS.TRIPPLE_OUTER && distance >= RADIUS.TRIPPLE_INNER)
    return `T${score}`;
  if (distance <= RADIUS.DOUBLE_OUTER && distance >= RADIUS.DOUBLE_INNER)
    return `D${score}`;
  return String(score);
}
