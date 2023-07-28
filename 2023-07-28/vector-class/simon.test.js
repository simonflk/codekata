// @ts-check
import { makeTest } from './test';

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;

class Vector {
  /** @type number[] */
  #vector = [];

  constructor(/** @type number[] */ vector) {
    this.#vector = vector;
  }

  get length() {
    return this.#vector.length;
  }

  at(/** @type number */ idx) {
    return idx >= 0 ? this.#vector[idx] : this.#vector[this.length + idx];
  }

  *[Symbol.iterator] () {
    for (let i = 0; i < this.length; i++) {
      yield this.at(i);
    }
  }

  add(/** @type Vector */ vec2) {
    this.assertCompatible(vec2);
    return new Vector(this.#vector.map((val, idx) => val + vec2.at(idx)));
  }
  subtract(/** @type Vector */ vec2) {
    this.assertCompatible(vec2);
    return new Vector(this.#vector.map((val, idx) => val - vec2.at(idx)));
  }
  dot(/** @type Vector */ vec2) {
    this.assertCompatible(vec2);
    return this.#vector.reduce((acc, val, idx) => acc + val * vec2.at(idx), 0);
  }

  norm() {
    return Math.sqrt(this.#vector.reduce((acc, v) => acc + v ** 2, 0));
  }

  toString() {
    return `(${this.#vector.join(',')})`;
  }

  equals(/** @type Vector */ vec2) {
    return this.toString() === vec2.toString();
  }

  assertCompatible(/** @type Vector */ vec2) {
    if (this.length !== vec2.length) {
      throw new Error('Vectors must be of the same length');
    }
  }
}

makeTest(Vector, RUN_TESTS);
