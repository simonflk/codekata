import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(centuryFromYear, RUN_TESTS);

export function centuryFromYear(year: number): number {
  let flooredDecimal = Math.floor( year / 100 )
  let flooredYear = flooredDecimal * 100
  if (flooredYear === year){
    return flooredDecimal
  } else {
    return flooredDecimal + 1
  }
 
}


// a solution i thought was kinda cool
//const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;