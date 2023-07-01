// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(theLift, RUN_TESTS);

/**
 * 
 * @param {Array<number[]>} queues 
 * @param {number} capacity 
 * @returns {number[]}
 */
function theLift(queues, capacity) {
  let output = [];
  let manifest = [];
  const totalPassengers = queues.reduce((acc, cur) => acc + cur.length, 0);
  let droppedOff = 0;

  let currentFloor = 0;
  let direction = "up";

  let count = 0;
  while (true) {
    count++;
    const waiting = queues[currentFloor];

    // let people off & update manifest
    const previousDroppedOff = droppedOff;
    droppedOff += manifest.filter((dest) => dest === currentFloor).length;
    manifest = manifest.filter((dest) => dest !== currentFloor);

    // change direction if needed
    if (direction === "up" && currentFloor === queues.length - 1) {
      direction = "down";
    } else if (direction === "down" && currentFloor === 0) {
      direction = "up";
    }

    // people waiting? collect people & update the manifest
    const isGoingInThisDirection = (dest) =>
      direction === "up" ? dest > currentFloor : dest < currentFloor;

    const isSomeoneWaiting = waiting.filter(isGoingInThisDirection).length > 0;

    if (isSomeoneWaiting && manifest.length < capacity) {
      const newWaiting = [];
      for (let i = 0; i < waiting.length; i++) {
        const dest = waiting[i];
        if (isGoingInThisDirection(dest) && manifest.length < capacity) {
          manifest.push(dest);
        } else {
          newWaiting.push(dest);
        }
      }
      queues[currentFloor] = newWaiting;
    }

    // if we picked up or dropped off, we need to add this to our list of stops
    if (
      output.length === 0 ||
      previousDroppedOff !== droppedOff ||
      isSomeoneWaiting
    ) {
      output.push(currentFloor);
    //   if (
    //     (previousDroppedOff !== droppedOff || isSomeoneWaiting) &&
    //     manifest.length === 0
    //   ) {
    //     output.push(-1);
    //   }

      if (droppedOff === totalPassengers) {
        // if we've dropped off everyone return to ground & we're done
        if (currentFloor !== 0) {
          output.push(0);
        }
        break;
      }
    }

    if (count > queues.length * totalPassengers) {
      // nuclear option
      break;
    }

    // otherwise, move to the next floor
    currentFloor = direction === "up" ? currentFloor + 1 : currentFloor - 1;
  }

  return output;
}
