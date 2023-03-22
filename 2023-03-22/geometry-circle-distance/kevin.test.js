// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(distanceBetweenCircles, RUN_TESTS);

/**
 * @param {import('./test').Circle} a
 * @param {import('./test').Circle} b
 * @returns {number}
 */
function distanceBetweenCircles(a, b) {

  const distanceBetweenCenters = 
   Math.sqrt(Math.pow((b.center.x - a.center.x), 2) + Math.pow((b.center.y - a.center.y), 2))

   if ((b.radius + a.radius) >= distanceBetweenCenters){
    return 0;
   } else {
     return distanceBetweenCenters - (b.radius + a.radius)
   }
  
}

