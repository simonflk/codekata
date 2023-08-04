// @_ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;

const MAX_PRIOR_SPELLS = 4;

/**
 * @typedef {Record<string, () => unknown>} Spells
 */

/**
 * @param {Spells} spells
 */
function Wand(spells = {}) {
  /** @type {Array<string|symbol>} */
  let previous = [];

  const addSpell = (/** @type string */ spell) => {
    previous.unshift(spell);
    previous.splice(MAX_PRIOR_SPELLS);
  };

  // Copy spells into our spellbook
  const spellBook = {
    ...spells,
  };

  // Our wand is a proxy of our spellbook
  // it intercepts all spells, and tracks usage
  // it also allows the spellbook to be modified to add new spells
  const wand = new Proxy(spellBook, {
    get(target, prop) {
      if (prop === 'prioriIncantatem') {
        return () => {
          // return the current previous before adding the spell
          const ret = [...previous];
          addSpell(prop);
          return ret;
        };
      } else if (prop === 'deletrius') {
        return () => {
          // delete all the previous spells
          previous.splice(0);
          addSpell(prop);
        };
      } else if (prop in target && typeof target[prop] === 'function') {
        // For spells in the spellbook
        return (...args) => {
          addSpell(prop);
          const ret = target[prop].apply(wand, args);
          return ret;
        };
      }

      return target[prop];
    },
  });

  // Make sure our proxy is a Wand
  Object.setPrototypeOf(wand, Wand.prototype);

  return wand;
}

makeTest(Wand, RUN_TESTS);
