import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(getDartboardScore, RUN_TESTS);

function getDartboardScore(x, y) {
  const scoresArray = [
    20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20,
  ];
  let hyptenuse = Math.sqrt(x * x + y * y);

  let scoreMod;
// i had a switch statemen here but didnt realize (0 < hyptenuse && hyptenuse < 6.35 ) != (0 < hyptenuse < 6.35), a switch would have made it a bit better
  if (0 < hyptenuse && hyptenuse < 6.35) {
    scoreMod = 'DB';
  } else if (6.35 < hyptenuse && hyptenuse < 15.9) {
    scoreMod = 'SB';
  } else if (15.9 < hyptenuse && hyptenuse < 99) {
    scoreMod = '';
  } else if (99 < hyptenuse && hyptenuse < 107) {
    scoreMod = 'T';
  } else if (107 < hyptenuse && hyptenuse < 162) {
    scoreMod = '';
  } else if (162 < hyptenuse && hyptenuse < 170) {
    scoreMod = 'D';
  } else if (170 < hyptenuse) {
    scoreMod = 'X';
  }

  if (scoreMod === 'X' || scoreMod === 'DB' || scoreMod === 'SB') {
    return scoreMod;
  }

  let opposite = Math.abs(x);
  let adjacent = Math.abs(y);
  let pi = Math.PI;
  let angle = Math.atan(opposite / adjacent) * (180 / pi);

  if (x > 0 && y > 0) {
    return scoreMod + scoresArray[Math.ceil((angle - 9) / 18)].toString();
  } else if (x > 0 && y < 0) {
    return scoreMod + scoresArray[Math.ceil((180 - angle - 9) / 18)].toString();
  } else if (x < 0 && y < 0) {
    return scoreMod + scoresArray[Math.ceil((180 + angle - 9) / 18)].toString();
  } else if (x < 0 && y > 0) {
    return (
      scoreMod + scoresArray[Math.ceil((360 - angle + 9) / 18) - 1].toString()
    );
  }
}
