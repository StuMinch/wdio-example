describe('Prerun Test', () => {
  
    it('should select the environment', async () => {
      const envBtn = await $("//android.widget.Button[@text='PROD']");
      await envBtn.click();
    });
  });
   
  