const assert = require('assert');

describe('Guest Checkout Screen', () => {
  
  it('should select the environment', async () => {
    const envBtn = await $("//android.widget.Button[@text='PROD']");
    await envBtn.click();
  });

  it('should allow location', async () => {
    const allowBtn = await $("//android.widget.TextView[@text='Allow']");
    await allowBtn.click();
    const whileUsingBtn = await $("//android.widget.Button[@text='While using the app']");
    await whileUsingBtn.click();
  });

  it('should enter a zip code', async () => {
    const zipCodeField = await $("//android.widget.TextView[@text='Enter City or Postal Code']");
    await zipCodeField.click();
    await zipCodeField.click();
    await zipCodeField.click();
    const enterZipCode = await $("//android.widget.EditText");
    await enterZipCode.setValue('7001');
    await driver.execute('mobile: performEditorAction', {'action': 'send'});
    driver.execute('mobile: performEditorAction', {'action': 'send'});
    driver.execute('mobile: performEditorAction', {'action': 'done'});
  });

  it('should tap on store result', async () => {
    const storeResult = await $("//android.widget.TextView[contains(@text,'#')]");
    await storeResult.click();
  });

  it('should dismiss the biometrics prompt', async () => {
    const dismissBtn = await $("//android.widget.TextView[@text='No, Thanks']");
    await dismissBtn.click();
  });

  it('should tap the OK button', async () => {
    const okBtn = await $("//android.widget.Button[@text='OK']");
    await okBtn.click();
  });

  it('should search for product', async () => {
    const tapScreen = await $("android.widget.RelativeLayout");
    await tapScreen.click();
    const searchField = await $("//android.widget.EditText[@text='What can we help you find?']");
    await searchField.click();
    await searchField.click();
    await searchField.click();
    await searchField.setValue('1001567222');
    await driver.execute('mobile: performEditorAction', {'action': 'search'});
    driver.execute('mobile: performEditorAction', {'action': 'search'});
    driver.execute('mobile: performEditorAction', {'action': 'done'});
  });

  it('should search and add item to cart', async () => {
    const searchResult = await $("//android.widget.TextView[@text='Whirlpool']");
    await searchResult.waitForDisplayed({ timeout: 10000 });
    await searchResult.click();
    const locateZipCode = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("A1A 1A1"))`;
    const enterZipCode = $(`android=${locateZipCode}`);
    await enterZipCode.waitForDisplayed({ timeout: 10000 });
    await enterZipCode.setValue('M1R 4E6');
    const locateAddToCart = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Add to Cart"))`;
    const addToCart = $(`android=${locateAddToCart}`);
    await addToCart.waitForDisplayed({ timeout: 10000 });
    await addToCart.click();
  });

  it('should wait for item to be added to the cart', async () => {
    const locateAddToCart = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Add to Cart"))`;
    const addToCart = $(`android=${locateAddToCart}`);
    await addToCart.waitForDisplayed({ timeout: 10000 });
    await driver.pause(5000);
  });

  it('should tap the cart icon', async () => {
    const shoppingCart = $("//*[@content-desc='View Cart']");
    await shoppingCart.click();
    await driver.pause(5000);
  });

  it('should tap checkout now', async () => {
    const checkoutNowBtn = await $("//android.widget.Button[@text='Checkout Now']");
    await checkoutNowBtn.waitForDisplayed({ timeout: 10000 });
    await checkoutNowBtn.click();
    await driver.pause(5000);
  });

  it('should tap checkout as guest', async () => {
    const checkoutAsGuestBtn = await $("//android.widget.Button[@text='Checkout as Guest']");
    await checkoutAsGuestBtn.waitForDisplayed({ timeout: 15000 });
    await checkoutAsGuestBtn.click();
  });

  it('should set email address version 2', async () => {
    await driver.switchContext('WEBVIEW_com.thehomedepotqa');
    const windowsHandles = browser.windowHandles();
    console.log(windowsHandles)
    const email = "stumin@saucelabs.com"; // Email address to set
  
    const result = await browser.execute((email) => {
      const element = document.querySelector("[formcontrolname=contactEmail]");
      if (element) {
        element.value = email;
        return true; // Return true to indicate the operation was successful
      }
      return false; // Return false if the element is not found
    }, email);
  
    console.log(result); 
  });
  
  
  

  it('should inject javascript on the page', async () => {
    const result = await browser.execute((a, b, c, d) => {
        // browser context - you may not access client or console
        return a + b + c + d
    }, 1, 2, 3, 4)
    // node.js context - client and console are available
    console.log(result) // outputs: 10
  });
});
 
