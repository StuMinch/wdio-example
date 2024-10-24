describe('Long Press Gesture Actions Test', () => {
  
    it('should tap on the accept button', async () => {
      const acceptBtn = await $('//android.widget.TextView[@resource-id="com.chase.sig.android:id/mdsButtonViewButton" and @text="Accept"]');
      acceptBtn.click();
    });

    it('should tap on more options', async () => {
        const moreOptions = await $('//android.widget.ImageButton[@content-desc="More options"]');
        await driver.pause(5000)
        moreOptions.click();
    });

    it('should tap on app info', async () => {
        const appInfo = await $('//android.widget.TextView[@content-desc="App Info Button"]');
        await driver.pause(5000)
        //appInfo.click();
        //await driver.execute('mobile: longClickGesture', appInfo);
        await driver.execute("mobile: longClickGesture", {'elementId': appInfo, 'duration': 2000})
        await driver.pause(5000)
    });
  });