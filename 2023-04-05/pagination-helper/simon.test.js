// @ts-check
import { makeTest } from './test';

class PaginationHelper {
  /** @type Array<unknown> */
  #collection = [];

  #itemsPerPage = 0;

  constructor(
    /** @type {Array<unknown>} */ collection,
    /** @type {number} */ itemsPerPage,
  ) {
    this.#collection = collection;
    this.#itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.#collection.length;
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.#itemsPerPage);
  }

  pageItemCount(/** @type number */ pageIndex) {
    const pageStart = pageIndex * this.#itemsPerPage;
    if (pageStart < 0 || pageStart >= this.itemCount()) return -1;
    const items = this.#collection.slice(
      pageStart,
      pageStart + this.#itemsPerPage,
    );
    return items.length;
  }

  pageIndex(/** @type number */ itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
    return Math.floor(itemIndex / this.#itemsPerPage);
  }
}

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(PaginationHelper, RUN_TESTS);
