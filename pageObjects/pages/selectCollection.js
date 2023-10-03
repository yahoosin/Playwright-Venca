import { expect } from '@playwright/test';

exports.SelectCollection = class SelectCollection {

    /**
     * @param {import('@playwright/test').Page} page
     */
    
    constructor(page) {
      this.page = page;
      this.menuHeader = page.locator('[title="Mujer"]');
      this.camisasBlusas = page.locator('[title="Camisas y blusas"]');
      this.text = page.locator('[data-uitest="storefrontTitle"]'); 
      this.buttonAfter = page.locator('[data-uitest="btnStrAfter"]');   
    }

    async selectItemFromMujerMenu () {
      await this.menuHeader.hover();
      await this.camisasBlusas.click();
      await expect(this.text).toContainText('Camisas y Blusas mujer');
      await expect(this.buttonAfter).toBeEnabled();
    }
}