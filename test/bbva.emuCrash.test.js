describe('VMD-673', () => {
  
    it('should tap the welcome button', async () => {
      const welcomeBtn = await $("//android.widget.Button[contains(@resource-id,\"welcomeTopButton\")]");
      await welcomeBtn.click();
    });

    it('should tap the text field', async () => {
        const textField = await $("//*[@resource-id=\"co.com.bbva.mb.dev:id/editText\"]");
        await textField.click();
        await textField.setValue('19481809');
        await driver.execute('mobile: performEditorAction', {'action': 'send'});
    });

    it('should tap the next button', async () => {
        const welcomeBtn = await $("//android.widget.Button[@resource-id=\"co.com.bbva.mb.dev:id/nextButton\"]");
        await welcomeBtn.click();
    });

    it('should tap the password field', async () => {
        const textField = await $("//*[@resource-id=\"co.com.bbva.mb.dev:id/passwordEditText\"]//*[@resource-id=\"co.com.bbva.mb.dev:id/editText\"]");
        await textField.click();
        await textField.setValue('Prueba01');
        await driver.execute('mobile: performEditorAction', {'action': 'send'});
    });

    it('should tap the login button', async () => {
        const loginBtn = await $("//android.widget.Button[@resource-id=\"co.com.bbva.mb.dev:id/loginButton\"]");
        await loginBtn.click();
    });

    it('should switch context to webview', async () => {
        await driver.switchContext("WEBVIEW_co.com.bbva.mb.dev");
    });


    it('should return elements inside a shadowRoot', async () => {
        const innerEl = await $('#cells-template-welcomeExperience[state=\"active\"]').shadow$$("innerEl");
        console.log(await innerEl.getValue()); 
    });

})