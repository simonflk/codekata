// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(chooseBestSum, RUN_TESTS);

/**
 * 
 * @param {number} t 
 * @param {number} k 
 * @param {number[]} ls 
 */
 function chooseBestSum(t, k, ls) {
    // need to track and return the total disctance traveled
     let totalDistance = 0
     let tripLegs = 0
     console.log(t, k ,ls)
     //sort the array longest first
     let arraySortedLongestFirst = ls.sort((a, b)=> b - a)
 
     //filter in only the longest numbers for the first K - 1 indexes
     let arrayLongestKNumbers = arraySortedLongestFirst.filter((number, index)=> index <= k - 1)
    console.log(arrayLongestKNumbers)
     //track the longest possible, even if above T
     
     
     const addArrayNumbers = (numberArray) =>{
         let calculatedDistance = 0
         for (let i = 0; i <= numberArray.length - 1; i++ ){
         calculatedDistance += numberArray[i]
     }
     return calculatedDistance;
 }
 
 
 const longestPossible = addArrayNumbers(arrayLongestKNumbers)
    console.log('longestposs',longestPossible) 
 
     //if the longest possible works off the bat return that
     if (longestPossible < t){
       console.log('longest possible works')
         return longestPossible
     }
 
     let possibleDistance = 0
     for (let i = 0; i <= arrayLongestKNumbers.length - 1; i++){
       console.log('outer')
         for(let j = k; j <= arraySortedLongestFirst.length - 1; j++){
          
             let currentValue = arrayLongestKNumbers[i]
             arrayLongestKNumbers[i] = arraySortedLongestFirst[j]
            console.log('inner',addArrayNumbers(arrayLongestKNumbers), arrayLongestKNumbers, t)
             if (addArrayNumbers(arrayLongestKNumbers) < t && addArrayNumbers(arrayLongestKNumbers) > possibleDistance){
                 arraySortedLongestFirst[j] = currentValue;
               console.log('setting possible')
               possibleDistance = addArrayNumbers(arrayLongestKNumbers);
                 console.log(possibleDistance)
               j -= 1
             } 
         }
     }
     return possibleDistance
 }