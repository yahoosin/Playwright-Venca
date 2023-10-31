//const { expect } = require('@playwright/test');

exports.CheckingCart = class CheckingCart {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.removeItem = this.page.locator('[data-uitest="delete"]')
    }

    get $referenceInCart () {
        return this.page.locator('[data-name="reference"][data-uitest="productReference"]');
    } 
    
    get $itemDescriptionInCart () {
        return this.page.locator('[class="block cutText"]');
    } 

    get $itemColorInCart () {
        return this.page.locator('[class="list-unstyled"] [class="thin"]').nth(0);
    }

    get $numberItemsInCart () {
        return this.page.locator('[class="list-unstyled"] [class="thin"]').nth(2);
    }

    get $sizeInCart () {
        return this.page.locator('[class="list-unstyled"] [class="thin"]').nth(1); 
    }
    
    async carRemoveItem() {
        await this.removeItem.click();     
    }
};