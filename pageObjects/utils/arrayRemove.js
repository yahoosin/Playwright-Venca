exports.ArrayRemove = class ArrayRemove {

    /**
   * @param {import('@playwright/test').Page} page
   */

      constructor(page) {
      this.page = page;
    }
  
    async arrayRemove(arr, value) {
        return arr.filter(function (geeks) {
            return geeks != value;
    })
    }
}; 