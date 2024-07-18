describe('Transition to Home View', () => {
  
    it('should tap the sign in button', async () => {
      await driver.pause(5000);
      const signinBtn = await $('//XCUIElementTypeOther[@name="Sign In"]');
      await signinBtn.waitForDisplayed({ timeout: 10000 });
      signinBtn.click();
    });

    it('should enter the usernames', async () => {
      await driver.pause(5000);
      const usernameBtn = await $('//XCUIElementTypeTextField[@value="UserName"]');
      await usernameBtn.waitForDisplayed({ timeout: 10000 });
      usernameBtn.setValue('T2566773');
    });

    it('should tap the next button', async () => {
      await driver.pause(5000);
      const nextBtn = await $('//XCUIElementTypeButton[@name="Next"]');
      await nextBtn.waitForDisplayed({ timeout: 10000 });
      nextBtn.click();
    });

    it('should enter the password', async () => {
      await driver.pause(5000);
      const passwordBtn = await $('//XCUIElementTypeSecureTextField[@value="Password"]');
      await passwordBtn.waitForDisplayed({ timeout: 10000 });
      passwordBtn.setValue('S6PKSju#ALKBSQ2nIUWe1f1y2oxwmt');
    });

    it('should tap the sign in button', async () => {
      await driver.pause(5000);
      const signinBtn = await $('//XCUIElementTypeButton[@name="Sign In"]');
      await signinBtn.waitForDisplayed({ timeout: 10000 });
      signinBtn.click();
    });

    it('should detect if element is existing', async () => {
      await driver.pause(5000);
      let elem = await $('//XCUIElementTypeStaticText[@name="Home"]')
      let isExisting = await elem.isExisting()
      console.log(isExisting);
    });

    it('should tap the price check option', async () => {
      await driver.pause(5000);
      const priceCheck = await $('//XCUIElementTypeButton[@name="VS Direct Price Check"]');
      await priceCheck.waitForDisplayed({ timeout: 10000 });
      priceCheck.click();
    });

    it('should tap the sku button', async () => {
      await driver.pause(5000);
      const skuBtn = await $('//XCUIElementTypeButton[@name="Enter SKU"]');
      await skuBtn.waitForDisplayed({ timeout: 10000 });
      skuBtn.click();
    });

    it('should validate sku field exists', async () => {
      await driver.pause(5000);
      let elem = await $('//XCUIElementTypeTextField[@value="SKU number"]')
      let isExisting = await elem.isExisting()
      console.log(isExisting);
    });
  
  });