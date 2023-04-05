// @ts-check
import { makeTest } from './test';

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range

    if (pageIndex < 0 || pageIndex > this.pageCount() - 1) {
      return -1;
    } else if (this.pageCount() === 1) {
      return this.itemCount();
    } else if (pageIndex === this.pageCount() - 1) {
      //at the final page, could be full or partially full
      if (this.itemCount() % this.itemsPerPage === 0) {
        // last index full
        return this.itemsPerPage;
      } else {
        //last index not full
        return this.itemCount() % this.itemsPerPage;
      }
    } else {
      // multiple pages, and not the last index, should be all other indices
      return this.itemsPerPage;
    }
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range


	if ( itemIndex < 0 || itemIndex > (this.itemCount()-1)){
		//index out of range
		return -1
	  }  else {  
		 return Math.floor(itemIndex / this.itemsPerPage)
	  }

    //My first wacky if/else that passes all tests, not really sure
    // if ( itemIndex < 0 || itemIndex >= this.itemCount()){
    //   //index out of range
    //   return -1
    // } else if( itemIndex === 0 ){
    //  // I dont know why this works i sort of stumbled into this based on failed submits
    //    return +0
    // } else {
    //    return Math.floor(itemIndex / this.itemsPerPage)
    // }
    // }
  }
}

//? Set to `true` when you are ready to enable tests
const RUN_TESTS = true;
makeTest(PaginationHelper, RUN_TESTS);
