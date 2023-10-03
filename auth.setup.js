import { test as setup } from '@playwright/test';
import { URLS, CREDENTIALS } from './pageObjects/data/Constants';
import { Cookies } from './pageObjects/pages/cookies';
import { LoginPage } from './pageObjects/pages/loginPage';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToURL(URLS.VENCAURL);
  const cookies = new Cookies(page);
  await cookies.acceptCookies();
  await loginPage.submitLoginForm(CREDENTIALS.VENCAUSER, CREDENTIALS.VENCAPASS); 
  await loginPage.checkLoginSuccessfully(); 

  await page.context().storageState({ path: authFile });
});