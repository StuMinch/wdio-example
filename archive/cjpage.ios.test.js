describe('Open an account to Cj page', () => {
  
    it('should tap allow once on geolocation prompt', async () => {
      const allowOnce = await $('Allow Once');
      allowOnce.click();
    });
  });
   