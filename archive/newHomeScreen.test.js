describe('Get all the elements', () => {
    it('should select the environment', async () => {
        const prodBtn = await $("//android.widget.Button[@text='PROD']");
        await prodBtn.isDisplayed();
        await prodBtn.click();
    });

    it('should allow location', async () => {
        const allowBtn = await $("//android.widget.TextView[@text='Allow']");
        await allowBtn.click();
        const whileUsingBtn = await $("//android.widget.Button[@text='While using the app']");
        await whileUsingBtn.click();
      });

      it('should get all the elements', async () => {
        console.log("Count the elements on the entire screen");
        const allEditText = await driver.findElements("//android.widget.EditText");
        allEditText.length;
        const allTextView = await driver.findElements("//android.widget.TextView");
        allTextView.length;
      });
});

