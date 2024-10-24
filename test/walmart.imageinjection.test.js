describe('Scan Multiple Images', () => {
  
    it('should tap the signin button', async () => {
        const signinBtn = await $('//android.widget.TextView[@text="Sign in"]');
        await signinBtn.waitForDisplayed({ timeout: 10000 });
        await signinBtn.click();
    });

    it('should get contexts', async () => {
        await driver.pause(5000);
        const contexts = await driver.getContexts();
        console.log('Available contexts:', contexts);
    });

    it('should switch to webview context', async () => {
        await driver.switchContext('WEBVIEW_chrome');
    });
    
    it('should login', async () => {
        // Click next button
        const nextBtn = await $('#userStoreFormSubmit');
        await nextBtn.waitForDisplayed({ timeout: 5000 });
        await nextBtn.click();
        // Enter Username
        const username = await $('#username1');
        await driver.pause(5000);
        await username.setValue('svcauthtest');
        // Find hidden element
        await driver.pause(5000);
        const element = await $('//input[@name="pf.ok"]/../a');
        // Verify the element
        const elementType = await element.getAttribute('type');
        console.log('Element type:', elementType);
        await element.waitForClickable({timeout: 5000});
        await element.click();
    });

    it('should enter security code', async () =>  {
        await driver.pause(5000);
        const securityCode = await $('#securityCode');
        await securityCode.waitForClickable({ timeout: 5000 });
        await securityCode.setValue('672870');
        await driver.execute('mobile: performEditorAction', {'action': 'done'});
    });
/*
    it('should tap the submit button', async () => {
        const submitBtn = await $('#submit');
        await submitBtn.waitForDisplayed({ timeout: 10000 });
        await submitBtn.click();
    });
*/
    it('should enter the password', async () => {
        const password = await $('#password');
        await password.waitForDisplayed({ timeout: 10000 });
        await password.setValue('QaHIm2UeNa');
        await driver.execute('mobile: performEditorAction', {'action': 'done'});
    });

    it('should switch to app context', async () => {
        await driver.switchContext('NATIVE_APP');
    });

    it('should enter the store number', async () => {
        const siteNumber = await $("//android.widget.EditText[@resource-id='site_input']");
        await siteNumber.waitForDisplayed({ timeout: 10000 });
        await siteNumber.setValue('5524');
        const submitBtn = await $("//android.widget.Button[@resource-id='site_submit_btn']");
        await submitBtn.waitForDisplayed({ timeout: 10000 });
        await submitBtn.click();
    });

    it('should tap i agree button', async () => {
        const iAgree = await $("//android.widget.TextView[@text='I agree']");
        await iAgree.waitForDisplayed({ timeout: 10000 });
        await iAgree.click();
    });

    it('should tap continue', async () => {
        const continueBtn = await $("//android.widget.TextView[@text='Continue']");
        await continueBtn.waitForDisplayed({ timeout: 10000 });
        await continueBtn.click();
    });

    it('should share my location', async () => {
        const continueBtn = await $("//android.widget.TextView[@text='Share your location']");
        await continueBtn.waitForDisplayed({ timeout: 10000 });
        await continueBtn.click();
    });

    it('should tap continue', async () => {
        const continueBtn = await $("//android.widget.TextView[@text='Continue']");
        await continueBtn.waitForDisplayed({ timeout: 10000 });
        await continueBtn.click();
    });

    it('should allow location', async () => {
        const whileUsingBtn = await $("//android.widget.Button[@text='While using the app']");
        await whileUsingBtn.waitForDisplayed({ timeout: 10000 });
        await whileUsingBtn.click();
    });

    it('should create pin', async () => {
        const createPinBtn = await $("//android.widget.TextView[@text='Create PIN']");
        await createPinBtn.waitForDisplayed({ timeout: 10000 });
        await createPinBtn.click();
        const one = await $('~1');
        const two = await $('~2');
        await one.waitForDisplayed({ timeout: 10000 });
        await two.waitForDisplayed({ timeout: 10000 });
        await driver.pause(1000);
        await one.click();
        await driver.pause(1000);
        await one.click();
        await driver.pause(1000);
        await one.click();
        await driver.pause(1000);
        await two.click();
        await driver.pause(1000);
        await driver.execute('mobile: performEditorAction', {'action': 'done'});
        const nextBtn = await $("//android.widget.TextView[@text='Next']");
        await nextBtn.waitForDisplayed({ timeout: 10000 });
        await nextBtn.click();
    });

    it('should confirm pin', async () => {
        const one = await $('~1');
        const two = await $('~2');
        await one.waitForDisplayed({ timeout: 10000 });
        await two.waitForDisplayed({ timeout: 10000 });
        await driver.pause(1000);
        await one.click();
        await driver.pause(1000);
        await one.click();
        await driver.pause(1000);
        await one.click();
        await driver.pause(1000);
        await two.click();
        await driver.pause(1000);
        const confirmBtn = await $("//android.widget.TextView[@text='Confirm']");
        await confirmBtn.waitForDisplayed({ timeout: 10000 });
        await confirmBtn.click();
        const okayBtn = await $("//android.widget.TextView[@text='Okay']");
        await okayBtn.waitForDisplayed({ timeout: 10000 });
        await okayBtn.click();
    });

    it('should navigate to barcode scanner', async () => {
        const menuIcon = await $("//android.widget.ImageView[@resource-id='MenuIcon']");
        await menuIcon.waitForDisplayed({ timeout: 10000 });
        await menuIcon.click();
        const invBtn = await $("//android.widget.TextView[@text='Inventory']");
        await invBtn.waitForDisplayed({ timeout: 10000 });
        await invBtn.click();
        const aisleBtn = await $("//android.widget.Button[@content-desc='Aisle locations']");
        await aisleBtn.waitForDisplayed({ timeout: 10000 });
        await aisleBtn.click();
        const barcodeBtn = await $("//android.widget.ImageView[@content-desc='barcode-icon']");
        await barcodeBtn.waitForDisplayed({ timeout: 10000 });
        await barcodeBtn.click();
        const whileUsingBtn = await $("//android.widget.Button[@text='While using the app']");
        await whileUsingBtn.waitForDisplayed({ timeout: 10000 });
        await whileUsingBtn.click();
    });

    it('should inject image', async () => {
        const { readFileSync } = require('fs')
        const { join } = require('path')
        // Read the file from your project and transform it to a base64 string
        const qrCodeImage = readFileSync(
            join(process.cwd(), 'assets/qr-code.png'), 'base64')
        // Provide the transformed image to the device
        driver.execute(`sauce:inject-image=${qrCodeImage}`)
    });

});
   