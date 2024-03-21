describe('Collect Android Macrobenchmarks', () => {
    it('should click on Login button', async () => {
        await $('//android.widget.TextView[@text="Login"]').click();
    });

    it('should scroll to item 100', async () => {
        const locateItem = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Item 100"))`;
        const tapItem = $(`android=${locateItem}`);
        await tapItem.waitForDisplayed({ timeout: 10000 });
        await tapItem.click();
        
        const itemClicked = $('//android.widget.TextView[@resource-id="android:id/message"]')
        await itemClicked.click();
    });

});