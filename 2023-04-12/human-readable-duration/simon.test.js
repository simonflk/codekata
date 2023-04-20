// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(formatDuration, RUN_TESTS);

/**
 * @param {number} seconds
 */
function formatDuration(seconds) {
  const duration = getDuration(seconds);
  const parts = [];
  if (duration.years) {
    parts.push(`${duration.years} ${pluralize(duration.years, 'year')}`);
  }
  if (duration.days) {
    parts.push(`${duration.days} ${pluralize(duration.days, 'day')}`);
  }
  if (duration.hours) {
    parts.push(`${duration.hours} ${pluralize(duration.hours, 'hour')}`);
  }
  if (duration.minutes) {
    parts.push(`${duration.minutes} ${pluralize(duration.minutes, 'minute')}`);
  }
  if (duration.seconds) {
    parts.push(`${duration.seconds} ${pluralize(duration.seconds, 'second')}`);
  }

  if (parts.length === 0) {
    return 'now';
  } else if (parts.length === 1) {
    return parts[0];
  } else {
    const lastPart = parts.pop();
    return `${parts.join(', ')} and ${lastPart}`;
  }
}

/**
 * @param {number} seconds
 */
function getDuration(seconds) {
  const secondsInAYear = 60 * 60 * 24 * 365;
  const secondsInADay = 60 * 60 * 24;
  const secondsInAnHour = 60 * 60;
  const secondsInAMinute = 60;

  const years = Math.floor(seconds / secondsInAYear);
  seconds -= years * secondsInAYear;

  const days = Math.floor(seconds / secondsInADay);
  seconds -= days * secondsInADay;

  const hours = Math.floor(seconds / secondsInAnHour);
  seconds -= hours * secondsInAnHour;

  const minutes = Math.floor(seconds / secondsInAMinute);
  seconds -= minutes * secondsInAMinute;

  return { years, days, hours, minutes, seconds };
}

/**
 * @param {number} number
 * @param {string} word
 * @param {string} pluralWord
 */
function pluralize(number, word, pluralWord = word + 's') {
  return number === 1 ? word : pluralWord;
}
