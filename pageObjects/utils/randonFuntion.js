exports.Random = class Random {

    /**
   * @param {import('@playwright/test').Page} page
   */

      constructor(page) {
      this.page = page;
    }
  
    async randomFuntion(amountItems) {
        const randomItem = Math.floor(Math.random() * amountItems);
        return randomItem;
    }
  }; 