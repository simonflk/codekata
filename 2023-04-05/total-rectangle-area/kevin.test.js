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

function calculate(recs) {
  let rectPointsArrays = [];
  console.log(recs);
  recs.forEach((rec) => {
    const deltaX = Math.abs(rec[2] - rec[0]);
    const deltaY = Math.abs(rec[3] - rec[1]);
  
    const thesePoints = [];

    if (deltaY === 1 && deltaX === 1) {
      thesePoints.push([rec[0], rec[1]]);
    } else if (deltaX === 1) {
      for (let j = 0; j <= deltaY - 1; j++) {
        thesePoints.push([rec[0], rec[1] + j]);
      }
    } else if (deltaY === 1) {
      for (let i = 0; i <= deltaX - 1; i++) {
        thesePoints.push([rec[0] + i, rec[1]]);
      }
    } else {
      for (let i = 0; i <= deltaX - 1; i++) {
        for (let j = 0; j <= deltaY - 1; j++) {
          thesePoints.push([rec[0] + i, rec[1] + j]);
        }
      }
    }
    rectPointsArrays.push(thesePoints);
  });
  if (rectPointsArrays.length < 3) {
    //console.log(recs, rectPointsArrays.flat(1).filter(onlyUnique),rectPointsArrays.flat(1).filter(onlyUnique).length, 'rectanhle pts')
  }
  //   const uniqRectPointsArray = rectPointsArrays.map((pointsArray, idx) => {
  //     let uniqePoints = pointsArray;
  //     for (let i = idx + 1; i <= rectPointsArrays.length - 1; i++) {
  //       uniqePoints = arrayUnique(pointsArray.concat(rectPointsArrays[i]));
  //       return uniqePoints;
  //     }
  //   });
  // console.log('uniq', uniqRectPointsArray)
  //   let totalArea = 0;
  //   for (let uniqRectPoints of uniqRectPointsArray) {
  //     totalArea += uniqRectPoints.length;
  //   }

  let holder = [];
  let isPresent = (element) => element;
  let sortaUniqe = rectPointsArrays.flat(1).filter(onlyUnique);
  for (let i = 0; i <= sortaUniqe.length - 1; i++) {

    if (holder.findIndex((elem)=> elem === sortaUniqe[i]) === -1) {
      holder.push(sortaUniqe[i]);
    }
  }

  if (holder.length > 5){
    console.log(holder.length, 'holder');
  }


  return holder.length;

  // thoughts:
  //on each loop set the potential increase in total area to a variable
  //check this set of points against all other rectangles points and subtract segments that are in union
  //with other rectangles until there is some amount of area left or none.  the intersections might become
  //extremely complicated tho.
  //Then add this final, non intersected area to the total area, then return the area
}
function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}
