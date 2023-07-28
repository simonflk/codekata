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
  console.log(queues, capacity);

  let floors = queues.map((floor, index)=> { return {passengersGoingUp: floor.filter((passenger)=> passenger > index), passengersGoingDown: floor.filter((passenger)=> passenger < index) }})
  let returnArray = floors[0].passengersGoingUp.length === 0 ? [0] : [];
  let passengers = [];
  let goingUp = true;
  //track if a floor has been pushed at each loop
  let indexPushedThisLoop = null

  for (let i = 0; i < floors.length - 1; i++){
    //reset this variable to start each loop w/0 a pushed index
    indexPushedThisLoop = null
    //drop off anyone that should get off first thing
    if(passengers.find((passenger)=> passenger === i) ){
      console.log('dropping off')
      passengers.filter((passenger)=> passenger !== i)
      returnArray.push(i)
      indexPushedThisLoop = i
    }
    //if going up, grab anyone who is going up who can fit
    if (goingUp) {
      //if there is someone who can get on, and we havnt pushed the floor index, do that
      if (passengers.length < capacity && floors[i].passengersGoingUp.length > 0 && indexPushedThisLoop === null){
        returnArray.push(i)
        indexPushedThisLoop = i
      }
      while (passengers.length < capacity && floors[i].passengersGoingUp.length > 0){
        passengers.push(floors[i].passengersGoingUp.find((passenger)=> passenger > i))
      }
    }

    floors.find((floor)=>floor.passengersGoingDown.length !== 0 && floor.passengersGoingUp.length !== 0)
  }

 

  return returnArray
}




//previous attempt
// function theLift(queues, capacity) {

//   console.log(queues, capacity)
//    let floors = queues
//    let returnArray = floors[0].length === 0 ? [0] : []
//    let passengers = []
//    let goingUp = true
 
//    for (let i = 0; i <= floors.length - 1; goingUp ? i++ : i--){
     
//    console.log(i, returnArray, passengers )
//      if (floors[i].find((waiter)=> goingUp ? waiter > i : waiter < i) || floors[i].find((waiter)=> goingUp ? waiter > i : waiter < i) === 0 || passengers.find((passenger)=>passenger === i) || (passengers.find((passenger)=>passenger === i) === 0 && i === 0)){
//        returnArray.push(i)
//        passengers = passengers.filter((passenger)=> passenger !== i)
//      }
     
//      while ((goingUp || passengers.find((passenger)=>passenger > i) === undefined && floors.filter((floor, index)=> floor.length === 0 && index > i).length === 0) && passengers.length < capacity && floors[i].find((waiter)=> waiter > i) !== undefined ){
//        let passengerToPush = floors[i].find((waiter)=> waiter > i)
//        let passengerindex = floors[i].findIndex((el)=>el === passengerToPush)
//        passengers.push(passengerToPush)
//        floors[i].splice(passengerindex, 1)
//      }
//      while ((!goingUp || i === floors.length - 1 || passengers.find((passenger)=>passenger > i) === undefined && floors.filter((floor, index)=> floor.length === 0 && index < i).length === 0) && passengers.length < capacity && floors[i].find((waiter)=> waiter < i) !== undefined ){
//        let passengerToPush = floors[i].find((waiter)=> waiter < i)
//        let passengerindex = floors[i].findIndex((el)=>el === passengerToPush)
//        passengers.push(passengerToPush)
//        if(i === floors.length - 1){
//           returnArray.push(i)
//        }
      
//        floors[i].splice(passengerindex, 1)
//      }
 
//       if (i === floors.length - 1){
//        goingUp = false
//      }
//      if (i === 0 && !goingUp){
//        goingUp = true
//        i--
//      }
     
//      if (floors.find((floor)=>floor.length > 0) === undefined && passengers.length === 0){
//       if (returnArray[returnArray.length-1] !== 0){
//         returnArray.push(0)
//       }
 
//   break
//      }
    
//    }
 
 
 
//    return returnArray;
//  }
 