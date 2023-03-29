// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(orderWeight, RUN_TESTS);

/**
 * @param {string} strng
 */
function orderWeight(strng) {
  //trim potential white spaces
  const stringTrimmed = strng.trimStart().trimEnd();

  //split remaining string at spaces
  let stringTrimmedSplit = stringTrimmed.split(' ');

  //function to calculate WeightedWeight based on string weight
  const figureWeight = (string) => {
    let stringWeight = 0;
    let splitString = string.split('');
    splitString.forEach((potentialNumber) => {
      if (Number(potentialNumber) !== NaN) {
        stringWeight += Number(potentialNumber);
      } else {
        stringWeight = 1000;
      }
    });
    return stringWeight;
  };

  // an array to hold objects with orginal weight and weightedWeight
  let trackingArray = [];
  //loop through the array and creat an object that has both the string value, and the weighted value
  stringTrimmedSplit.forEach((stringWeight) => {
    trackingArray.push({
      stringValue: stringWeight,
      weightedWeight: figureWeight(stringWeight),
    });
  });

  //filter in weightedWeights < 1000, this should exclude a weightString that has non-number characters
  let onlyRealWeights = trackingArray.filter(
    (weightEntry) => weightEntry.weightedWeight < 1000,
  );
  //sort the Array by the weightedWeights
  let sortedRealWeights = onlyRealWeights.sort((a, b) => {
    if (a.weightedWeight > b.weightedWeight) return 1;
    if (a.weightedWeight < b.weightedWeight) return -1;
    if (a.stringValue > b.stringValue) return 1;
    if (a.stringValue < b.stringValue) return -1;
  });

  //empty string to build for return
  let returnString = '';
//create new Array with just the stringWeights and then join those entries with a space
  returnString = sortedRealWeights.map((entry)=> entry.stringValue).join(' ')


  //ALTERNATE LOOP AS FOREACH
  // //add the original weights to the return as strings
  // sortedRealWeights.forEach((entry) => {
  //   returnString += entry.stringValue + ' ';
  // });


  return returnString;
}

