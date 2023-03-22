import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(snakesAndLadders, RUN_TESTS);

function snakesAndLadders(board: number[], dice: number[]) {
  let index = 0;
  for (const roll of dice) {
    const nextPos = index + roll;
    const nextDelta = board[nextPos];
    if (nextDelta === undefined) {
      // invalid roll - overshoots, roll again
      continue;
    }

    // Advance position
    index = nextPos + nextDelta;

    if (index === board.length - 1) {
      // We have won, no need to keep rolling
      break;
    }
  }
  return index;
}
