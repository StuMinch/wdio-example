describe('iOS Session Start Time', () => {
  
    it('should tap allow once on geolocation prompt', async () => {
      const allowOnce = await $('Allow Once');
      allowOnce.click();
    });
  });
   
  