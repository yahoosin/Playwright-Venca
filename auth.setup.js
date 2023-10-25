import { Browser, chromium, page } from '@playwright/test';
import { URLS, CREDENTIALS } from './pageObjects/data/Constants';
import { Cookies } from './pageObjects/pages/cookies';
import { LoginPage } from './pageObjects/pages/loginPage';

const authFile = '.auth/user.json';

exports.AuthSetup = class AuthSetup {

async authSetup() {
  const browser = new Browser(); 
  await browser.chromium.launch({ headless: false });
  const loginPage = new LoginPage(page);
  await loginPage.goToURL(URLS.VENCAURL);
  const cookies = new Cookies(page);
  await cookies.acceptCookies();
  await loginPage.submitLoginForm(CREDENTIALS.VENCAUSER, CREDENTIALS.VENCAPASS); 
  await loginPage.checkLoginSuccessfully(); 

  await page.context().storageState({ path: authFile });
  await browser.close();
}
};