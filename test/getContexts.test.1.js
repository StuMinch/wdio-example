describe('Guest Checkout Screen', () => {
  
  it('should select the environment', async () => {

    let contexts = await driver.getContexts();
    console.log(contexts);

    const envBtn = await $("//android.widget.Button[@text='PROD']");
    await envBtn.click();
  });

  it('should allow location', async () => {
    let contexts = await driver.getContexts();
    console.log(contexts);

    const allowBtn = await $("//android.widget.TextView[@text='Allow']");
    await allowBtn.click();

    const whileUsingBtn = await $("//android.widget.Button[@text='While using the app']");
    await whileUsingBtn.click();
  });

  it('should enter a zip code', async () => {
    let contexts = await driver.getContexts();
    console.log(contexts);

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
    let contexts = await driver.getContexts();
    console.log(contexts);

    const storeResult = await $("//android.widget.TextView[contains(@text,'#')]");
    await storeResult.click();
  });

  it('should dismiss the biometrics prompt', async () => {
    let contexts = await driver.getContexts();
    console.log(contexts);

    const dismissBtn = await $("//android.widget.TextView[@text='No, Thanks']");
    await dismissBtn.click();
  });

  it('should tap the OK button', async () => {
    let contexts = await driver.getContexts();
    console.log(contexts);

    const okBtn = await $("//android.widget.Button[@text='OK']");
    await okBtn.click();
  });

  it('should search for product', async () => {
    let contexts = await driver.getContexts();
    console.log(contexts);

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

    it('should tap on search result', async () => {
      let contexts = await driver.getContexts();
      console.log(contexts);

      const searchResult = await $("//android.widget.TextView[@text='Whirlpool']");
      await searchResult.waitForDisplayed({ timeout: 10000 });
      await searchResult.click();
    });

    it('should add item to cart', async () => {
      let contexts = await driver.getContexts();
      console.log(contexts);

      const locateZipCode = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("A1A 1A1"))`;
      const enterZipCode = $(`android=${locateZipCode}`);
      await enterZipCode.setValue('M1R 4E6');
      
      const locateAddToCart = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Add to Cart"))`;
      const addToCart = $(`android=${locateAddToCart}`);
      await addToCart.click();
    });

    it('should wait for item to be added to the cart', async () => {
      let contexts = await driver.getContexts();
      console.log(contexts);

      const addToCart = await $("//android.widget.Button[@text='Add to Cart']");
      await addToCart.waitForDisplayed({ timeout: 10000 });
    });

    it('should view the cart', async () => {
      const viewCartBtn = $("//*[@content-desc='View Cart']");
      await viewCartBtn.waitForDisplayed({ timeout: 10000 });
      await viewCartBtn.click();
    });

    it('should tap checkout now', async () => {
      const checkoutNowBtn = $("//*[@id='btnCheckoutNow']");
      await checkoutNowBtn.waitForDisplayed({ timeout: 5000 });
      await checkoutNowBtn.click();
    });

});

