import { expect } from '@playwright/test';
import { time } from 'console';

exports.LoginPage = class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.user = page.locator('[data-uitest="emailLogin"]');
      this.pass = page.locator('[data-uitest="password"]');
      this.loginButton = page.locator('[id="userAlreadyDK"]');
      this.welcomeText = page.locator('[data-uitest="userName"]');
    }

    async goToURL(url) {
      await this.page.goto(url);      
    }
  
    async submitLoginForm(user, pass) {
      await this.user.fill(user);
      await this.pass.fill(pass);
      await this.loginButton.click();
    }

    async checkLoginSuccessfully() {
      await expect(this.welcomeText).toBeVisible(time(10000));
    }
  };