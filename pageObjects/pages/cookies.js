exports.Cookies = class Cookies {

    /**
   * @param {import('@playwright/test').Page} page
   */

      constructor(page) {
      this.page = page;
      this.cookiesButton = page.locator('[id="onetrust-accept-btn-handler"]');
    }
  
    async acceptCookies() {
      await this.cookiesButton.click();
    }
  };  