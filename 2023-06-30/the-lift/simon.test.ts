// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(theLift, RUN_TESTS);


type Direction = 'up' | 'down';

export function theLift(queues: number[][], capacity: number): number[] {
  const output = [0];
  let manifest: number[] = [];
  const totalPassengers = queues.reduce((acc, cur) => acc + cur.length, 0);
  let droppedOff = 0;

  let currentFloor = 0;
  let direction = 'up' as Direction;

  let count = 0;
  while (true) {
    count++;
    const waiting = queues[currentFloor];
    invariant(waiting !== undefined, `No waiting on floor ${currentFloor}`);

    // let people off & update manifest
    const previousDroppedOff = droppedOff;
    droppedOff += manifest.filter((dest) => dest === currentFloor).length;
    manifest = manifest.filter((dest) => dest !== currentFloor);

    // Let people on if they're going in the right direction
    const isSomeoneWaiting =
      waiting.filter((dest) => isFloorEnRoute(dest, direction, currentFloor))
        .length > 0;
    if (isSomeoneWaiting && manifest.length < capacity) {
      const newWaiting: number[] = [];
      for (let i = 0; i < waiting.length; i++) {
        const dest = waiting[i];
        invariant(dest !== undefined);
        if (
          isFloorEnRoute(dest, direction, currentFloor) &&
          manifest.length < capacity
        ) {
          manifest.push(dest);
        } else {
          newWaiting.push(dest);
        }
      }
      queues[currentFloor] = newWaiting;
    }

    // Work out where to go next
    let nextFloor =
      direction === 'up'
        ? Math.min(queues.length - 1, currentFloor + 1)
        : Math.max(0, currentFloor - 1);
    let nextDirection = direction;
    if (manifest.length === 0) {
      // See if we can pick anyone up in our current direction
      let stops = findNextStops(queues, direction, nextFloor);
      if (stops.length > 0) {
        // There is someone heading in our direction, so go to the next stop
        nextFloor = stops[0] ?? currentFloor;
      } else {
        // No stops in the current direction, so change direction and
        // find the furthest stop that wants to go in the new direction
        nextDirection = direction === 'up' ? 'down' : 'up';
        const startingFrom = nextDirection === 'up' ? 0 : queues.length;
        stops = findNextStops(queues, nextDirection, startingFrom);
        nextFloor = stops.at(0) ?? currentFloor;
      }
    }

    // If someone got off or we opened the doors for someone hoping to get on,
    // record the stop
    if (previousDroppedOff !== droppedOff || isSomeoneWaiting) {
      recordStop(currentFloor);
    }

    // Return to base if we've dropped everyone off
    if (droppedOff === totalPassengers) {
      recordStop(0);
      break;
    }

    // Bail out if we're stuck
    if (count > queues.length * totalPassengers) {
      recordStop(Infinity);
      break;
    }

    // otherwise, move to the next floor
    currentFloor = nextFloor;
    direction = nextDirection;
  }

  function recordStop(floor: number) {
    if (output.at(-1) !== floor) {
      output.push(floor);
    }
  }

  return output;
}

function invariant(condition: any, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message || 'Invariant violation');
  }
}

function isFloorEnRoute(floor: number, dir: Direction, startingAt: number) {
  return dir === 'up' ? floor > startingAt : floor < startingAt;
}

function findNextStops(queues: number[][], dir: Direction, floor: number) {
  // Return a list of possible stops in the current direction
  let stops: number[] = [];
  queues.forEach((waiting, waitingAt) => {
    if (dir === 'up' && waitingAt < floor) return;
    if (dir === 'down' && waitingAt > floor) return;
    if (waiting.some((dest) => isFloorEnRoute(dest, dir, waitingAt))) {
      stops.push(waitingAt);
    }
  });
  if (dir === 'down') {
    stops.reverse();
  }
  return stops;
}
