describe('should switch to Flutter WebView', () => {
  it('should use the intercept service', async () => {
    await browser.getContext();
    await browser.switchContext('WEBVIEW_com.example.webview_in_flutter');
    await browser.getWindowHandle();
    await browser.switchWindow('Flutter - Build apps for any screen');
  });

  it('should navigate to the Overview page', async () => {
    browser.setupInterceptor();
    const hamburger = await $("/html/body/header/div/div[2]/div[2]/i");
    await hamburger.waitForDisplayed({ timeout: 2000 });
    await hamburger.click();
    browser.pause(1000);
    var hbRequest = browser.getRequest(1);
    console.log(hbRequest);

    const multiplatform = await $("/html/body/header/div/div[2]/nav/ul/li[1]/a");
    await multiplatform.waitForDisplayed({ timeout: 2000 });
    await multiplatform.click();
    browser.pause(1000);
    var mpRequest = browser.getRequest(1);
    console.log(mpRequest);

    const overview = await $("/html/body/header/div/div[2]/nav/ul/li[1]/div[2]/ul/li[1]/a");
    await overview.waitForDisplayed({ timeout: 2000 });
    await overview.click();
    browser.pause(1000);
    var ovRequest = browser.getRequest(1);
    console.log(ovRequest);
    await browser.getWindowHandle();
  })

});
 
