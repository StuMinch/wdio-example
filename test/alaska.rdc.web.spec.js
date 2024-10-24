describe('Test Appium Versions', () => {
  
    it('should verify the title of the webpage', async () => {
      await browser.url('https://goldendaysoff-qa.azurefd.net/');
      expect(browser).toHaveTitle('Alaska Airlines / Horizon Air');
      await driver.pause(5000);
    });
  });
   