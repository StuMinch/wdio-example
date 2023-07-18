describe('Guest Checkout Screen', () => {
  
  it('should select the environment', async () => {

    let contexts = await driver.getContexts();
    console.log(contexts);

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

    it('should tap on search result', async () => {
      const searchResult = await $("//android.widget.TextView[@text='Whirlpool']");
      await searchResult.click();
      await searchResult.click();
      await searchResult.click();
    });

    it('should add item to cart', async () => {
      await driver.execute('mobile: scroll', {'direction': 'down'});
      const enterZipCode = await $("//android.widget.EditText[@text='A1A 1A1']");
      await enterZipCode.setValue('M1R 4E6');
    })

});

