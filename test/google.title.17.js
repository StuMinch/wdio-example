describe('Sauce Labs Tests', () => {
    it('should load Google homepage', () => {
      browser.url('https://www.google.com');
      expect(browser).toHaveTitle('Google');
    });
  });
  