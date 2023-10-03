import { expect } from '@playwright/test';

exports.ItemFeatures = class ItemFeatures {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.cart = page.locator('[id="cartZone"]');
      //this.sizeButtonSelector = page.locator('[data-uitest="productSizeSelector"]');
      //this.sizeL = page.locator('[data-id-for-select][data-id-for-select="L"]');      
      this.buttonAddToCart = page.locator('[data-uitest="productAddToCart"]'); 
      this.cartReviewText = page.locator('[id="productDetails"] h2');       
    }

    get $reference () {
      return this.page.locator('[id="reference"]');
    }

    get $itemDescription () {
      return this.page.locator('[id="mainTextFeatures"] h1');
    }

    get $itemColor () {
      return this.page.locator('[data-uitest="productColor"]');
    }

    get $numberItemsInCart () {
      return this.page.locator('[id="cartZone"]');
    }

    get $size () {
      //return this.page.locator('[data-id-for-select] [data-id-for-select="L"]');
      return this.page.locator('[id="selectedSize"]');
    }

    async itemFeatures () {
        //await this.sizeButtonSelector.click();
        //await this.sizeL.click();
        await this.buttonAddToCart.click();
        await this.cart.click();
        await expect(this.cartReviewText).toContainText('Revisa tu pedido');      
        
    }
};