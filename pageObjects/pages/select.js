import { expect } from '@playwright/test';
import { Random } from '../utils/randonFuntion';

exports.Select = class Select {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
      this.page = page;
      this.allItems = page.locator('[data-uitest="storefrontProductsImage" ]');
      this.sizeButtonSelector = page.locator('[data-uitest="productSizeSelector"]');
      this.allSizes = page.locator('[data-id-for-select]');
      this.buttonAddToCart = page.locator('[data-uitest="productAddToCart"]');
    }
    
    async selectItem() {
        const random = new Random();
        const amountItems = await this.allItems.all();
        const itemIndex = await random.randomFuntion(amountItems.length);
        await this.allItems.nth(itemIndex).click();
        await expect(this.buttonAddToCart).toBeVisible();
      }

      async selectSize() {
        const random = new Random();
        await this.sizeButtonSelector.click();
        const amountSizes = await this.allSizes.all();
        const sizeIndex = await random.randomFuntion(amountSizes.length);
        await this.allSizes.nth(sizeIndex).click();
        await expect(this.buttonAddToCart).toBeVisible();
      }
    };