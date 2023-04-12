// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(formatDuration, RUN_TESTS);

/**
 * @param {number} seconds
 */
function formatDuration(seconds) {
  // Complete this function

  //edge case short circuits
  if (seconds === 0) {
    return 'now';
  } else if (seconds < 60) {
    return `${seconds} ${pluralize(seconds, 'second')}`;
  }

  //quick access for secondsIn another time segment
  const secondsIn = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
  };

  // figure out the counts and labels and remainders for the data
  let years = Math.floor(seconds / secondsIn.year);
  let yearLabel = pluralize(years, 'year');
  let yearsRemainder = seconds % secondsIn.year;
  let days = Math.floor(yearsRemainder / secondsIn.day);
  let daysLabel = pluralize(days, 'day');
  let daysRemainder = yearsRemainder % secondsIn.day;
  let hours = Math.floor(daysRemainder / secondsIn.hour);
  let hoursLabel = pluralize(hours, 'hour');
  let hoursRemainder = daysRemainder % secondsIn.hour;
  let minutes = Math.floor(hoursRemainder / secondsIn.minute);
  let minutesLabel = pluralize(minutes, 'minute');
  let minutesRemainder = hoursRemainder % secondsIn.minute;
  let secondz = minutesRemainder;
  let secondsLabel = pluralize(secondz, 'second');

  //create an object with the count and PLURALIZED label, shoutOut Simon ;]
  const valuesArray = [
    { count: years, label: yearLabel },
    { count: days, label: daysLabel },
    { count: hours, label: hoursLabel },
    { count: minutes, label: minutesLabel },
    { count: secondz, label: secondsLabel },
  ];

  //filter out elements which have a count of zero, they will not be included in the string
  const filteredArray = valuesArray.filter((data) => {
    return data.count > 0;
  });

  //string to build for return
  let returnString = '';

  for (let i = 0; i <= filteredArray.length - 1; i++) {
    if (filteredArray.length === 1) {
      //if the filteredArray only has 1 element, this is the answer
      returnString = `${filteredArray[i].count} ${filteredArray[i].label}`;
    } else if (i === filteredArray.length - 1) {
      //if the element is the last element, it has special string format
      returnString += ` and ${filteredArray[i].count} ${filteredArray[i].label}`;
    } else if (i === filteredArray.length - 2) {
      //if the element is the second last element, it has special string format in my solution
      returnString += `${filteredArray[i].count} ${filteredArray[i].label}`;
    } else {
      // its a 'standard' format for the string
      returnString += `${filteredArray[i].count} ${filteredArray[i].label}, `;
    }
  }

  return returnString;
}

function pluralize(count, word) {
  return count === 1 ? word : word + 's';
}
