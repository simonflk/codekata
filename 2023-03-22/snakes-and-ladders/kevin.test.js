// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(snakesAndLadders, RUN_TESTS);

/**
 *
 * @param {number[]} board
 * @param {number[]} dice
 * @returns number
 */
function snakesAndLadders(board, dice) {
  //keep track of which index on the board we are on
  let boardIndex = 0;

  //loop through the dice rolls
  for (let i = 0; i <= dice.length - 1; i++) {
    if (boardIndex + dice[i] >= board.length) {
    } else {
      boardIndex = boardIndex + dice[i];
    }
    //now that a new board index is establish, this
    //next bit should account for a cascade of snakes or ladders
    while (board[boardIndex] !== 0) {
      boardIndex += board[boardIndex];
    }
  }

  return boardIndex;
}
