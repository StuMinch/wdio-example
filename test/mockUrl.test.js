describe('Navigate to Mock Server URL', () => {
  
    it('should navigate to mock url', async () => {
      const envBtn = await $("http://localhost:8080");
      await envBtn.click();
    });
})
