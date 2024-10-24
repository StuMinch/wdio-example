describe('IM-720 localhost:8999 test', () => {
  
    it('should verify the title of the webpage', async () => {
      await browser.url('http://localhost:8999');
      await driver.pause(5000);
    });
  });
   