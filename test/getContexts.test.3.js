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
    });

    it('should tap the cart icon', async () => {
      const shoppingCart = $("//*[@content-desc='View Cart']");
      await shoppingCart.click();
      await driver.pause(10000);
    });

    it('should tap checkout now', async () => {
      const checkoutNowBtn = await $("//android.widget.Button[@text='Checkout Now']");
      await checkoutNowBtn.waitForDisplayed({ timeout: 10000 });
      await checkoutNowBtn.click();
      await driver.pause(10000);
    });

    it('should tap checkout as guest', async () => {
      const checkoutAsGuestBtn = await $("//android.widget.TextView[@text='Checkout as Guest']");
      await checkoutAsGuestBtn.waitForDisplayed({ timeout: 10000 });
      await checkoutAsGuestBtn.click();
      await driver.pause(10000);
    });

    it('should switch context and get page source', async () => {
      let currentContexts = await driver.getContexts();
      console.log(currentContexts);
      await driver.pause(10000);
      await driver.switchContext('WEBVIEW_com.thehomedepotqa');
    });

    it('should enter email address', async () => {
      //const emailAddr = await $("//*[@text='Email (for receipt)']/../../android.view.View//android.widget.EditText");
      const emailAddr = await $("//*[formcontrolname='contactEmail']");
      //const emailAddr = await $("/html/body/app-root/checkout-landing-page/hdca-purchase-checkout-container/div/div/div[1]/hdca-purchase-user-info-flow-container/div/hdca-purchase-guest-container/hdca-purchase-guest-email-form/hdca-purchase-form-card/acl-card/section/form/div/acl-input-container/div[2]/div/input");
      await emailAddr.waitForDisplayed({ timeout: 10000 });
      await emailAddr.click();
      await emailAddr.setValue('stumin@saucelabs.com');
    });
/*
    it('should tap continue button', async () => {
      const continueBtn = await $("//android.widget.Button[@text='Continue']");
      await continueBtn.waitForDisplayed({ timeout: 10000 });
      await continueBtn.click();
    });

    it('should enter zip code', async () => {
      const locateZipCode = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("A1A 1A1"))`;
      const enterZipCode = $(`android=${locateZipCode}`);
      await enterZipCode.waitForDisplayed({ timeout: 10000 });
      await enterZipCode.setValue('M1R 4E6');
    });

    it('should add item to the cart', async () => {
      const locateAddToCart = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Add to Cart"))`;
      const addToCart = $(`android=${locateAddToCart}`);
      await addToCart.waitForDisplayed({ timeout: 10000 });
      await addToCart.click();
    });

*/

});
