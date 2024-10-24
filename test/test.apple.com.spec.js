describe('iOS Session Start Time', () => {
  
    it('should verify the title of the iPhone webpage', async () => {
      await browser.url('https://apple.com/iphone');
      expect(browser).toHaveTitle('Apple - iPhone');
      await browser.url('https://www.whatismyip.com');
    });
  });
   