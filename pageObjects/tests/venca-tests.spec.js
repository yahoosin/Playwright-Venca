import { test, expect } from '@playwright/test';
import { URLS, CREDENTIALS } from '../data/Constants';
import { Cookies } from '../pages/cookies';
import { SelectCollection } from '../pages/selectCollection';
import { LoginPage } from '../pages/loginPage';
import { Select } from '../pages/select';
import { ItemFeatures } from '../pages/itemFeatures';
import { CheckingCart } from '../pages/checkingCart';

test('User must be logged in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToURL(URLS.VENCAURL);
  const cookies = new Cookies(page);
  await cookies.acceptCookies();
  await loginPage.submitLoginForm(CREDENTIALS.VENCAUSER, CREDENTIALS.VENCAPASS);
  await loginPage.checkLoginSuccessfully();
});

test('User must be selected a clothing item', async ({ page }) => { 
  const loginPage = new LoginPage(page);
  await loginPage.goToURL(URLS.VENCAURL);
  const cookies = new Cookies(page);
  await cookies.acceptCookies();
  await loginPage.submitLoginForm(CREDENTIALS.VENCAUSER, CREDENTIALS.VENCAPASS);
  await loginPage.checkLoginSuccessfully();
  
  const selectCollection = new SelectCollection(page);
  await selectCollection.selectItemFromMujerMenu();  

  const select = new Select(page);
  await select.selectItem();
  await select.selectSize();
  
  const itemFeatures = new ItemFeatures(page);

  const referenceLocator = itemFeatures.$reference;
  const reference = await referenceLocator.textContent();

  const itemDescriptionLocator = itemFeatures.$itemDescription;
  const itemDescription = await itemDescriptionLocator.textContent();

  const itemColorLocator = itemFeatures.$itemColor;
  const itemColor = await itemColorLocator.textContent();

  const numberItemsInCartBeforeAddingLocator = itemFeatures.$numberItemsInCart;
  const numberItemsInCartBeforeAdding = await numberItemsInCartBeforeAddingLocator.textContent();

  const sizeLocator = itemFeatures.$size;
  const size = await sizeLocator.textContent();

  await itemFeatures.itemFeatures();

  const checkingCart = new CheckingCart(page);

  const referenceInCartLocator = checkingCart.$referenceInCart;
  const referenceInCart = await referenceInCartLocator.textContent();

  const itemDescriptionInCartLocator = checkingCart.$itemDescriptionInCart;
  const itemDescriptionInCart = await itemDescriptionInCartLocator.textContent();

  const itemColorInCartLocator = checkingCart.$itemColorInCart;
  const itemColorIn = await itemColorInCartLocator.textContent();
  const stringC  = itemColorIn.trim();
  const subStringC  = stringC.split(':');
  const itemColorInCart = subStringC[1];

  const numberItemsInCartLocator = checkingCart.$numberItemsInCart;
  const numberItemsIn = await numberItemsInCartLocator.textContent();
  const string  = numberItemsIn.trim();
  const subString  = string.split(':');
  const usefulString = subString[1];
  const numberItemsInCart = parseInt(usefulString);

  const sizeInCartLocator = checkingCart.$sizeInCart;
  const sizeInC = await sizeInCartLocator.textContent();
  const stringS  = sizeInC.trim();
  const subStringS  = stringS.split(':');
  const sizeInCart = subStringS[1];

  await expect(reference).toEqual(referenceInCart);
  await expect(itemDescription.trim()).toEqual(itemDescriptionInCart.trim());
  await expect(itemColor.trim()).toEqual(itemColorInCart.trim());
  await expect(parseInt(numberItemsInCartBeforeAdding.trim()) + 1).toEqual(numberItemsInCart);
  await expect(size.trim()).toEqual(sizeInCart.trim());

  await checkingCart.checkingCart(); 
  await page.close();
});