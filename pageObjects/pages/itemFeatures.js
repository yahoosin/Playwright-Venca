import { expect } from '@playwright/test';

exports.ItemFeatures = class ItemFeatures {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.cart = page.locator('[id="cartZone"]');    
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
      return this.page.locator('[id="selectedSize"]');
    }

    async itemFeatures () {
        await this.buttonAddToCart.click();
        await this.cart.click();
        await expect(this.cartReviewText).toContainText('Revisa tu pedido');      
        
    }
};