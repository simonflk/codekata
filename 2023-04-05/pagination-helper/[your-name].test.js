// @ts-check
import { makeTest } from './test';

class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	}
	itemCount() {
	// returns the number of items within the entire collection
	}
	pageCount() {
	// returns the number of pages
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	}
}

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = false;
makeTest(PaginationHelper, RUN_TESTS);
