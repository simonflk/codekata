// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(calculate, RUN_TESTS);

/**
 * 
 * @param {number[][]} recs
 * @returns {number}
 */
function calculate(recs){
    console.log(recs, 'recs')
    let totalArea = 0

  recs.forEach((rec)=>{
        
        let base = Math.abs(Number(rec[2]) - Number(rec[0]))
 
        let height = Math.abs(Number(rec[3]) - Number(rec[1]))
    
        totalArea += (base * height)
    }
  )

    return totalArea;

    // thoughts:
    //on each loop set the potential increase in total area to a variable
    //check this set of points against all other rectangles points and subtract segments that are in union
    //with other rectangles until there is some amount of area left or none.  the intersections might become
    //extremely complicated tho.
    //Then add this final, non intersected area to the total area, then return the area
}