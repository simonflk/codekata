// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(foundationMessage, RUN_TESTS);

/**
 * @param {string} message
 * @returns {string}
 */
function foundationMessage(message) {
  const sentences = message.split(/[\.?!]\n*/sm);

  const stripPunctuation = (/** @type {string} */ sentence) =>
    sentence.replace(/[^\w\s_]/g, '');

  const getWords = (/** @type {string | undefined} */ sentence) =>
    sentence
      ?.trim()
      .split(/\s+/)
      .filter((word) => word.match(/\w/))
      .map((word) => word.replace(/^\W+|[^\w']+$/g, '')) ?? [];

  const getKey = (/** @type {string | undefined} */ sentence) =>
    getWords(stripPunctuation(sentence ?? '')).map((word) => word.length);

  /**
   * @type {Array<number>}
   */
  let key = [];

  let decoded = [];
  let index = 0;
  while (sentences.length > 0) {
    if (index === 0) {
      key = getKey(sentences.shift());
      index++;
      continue;
    }

    const words = getWords(sentences.shift());
    const _key = key[index - 1];
    const decodedWord = words[_key - 1];

    if (decodedWord === undefined) {
      continue;
    }

    if (index === 1) {
      const [firstLetter, ...rest] = decodedWord;
      decoded.push([firstLetter.toUpperCase() + rest.join('')]);
    } else {
      decoded[decoded.length - 1].push(decodedWord.toLowerCase());
    }

    index = index === key.length ? 0 : index + 1;
  }

  return decoded.length
    ? decoded.map((words) => words.join(' ')).join('. ') + '.'
    : '';
}
