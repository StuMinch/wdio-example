describe('Collect Android Macrobenchmarks', () => {
    it('should click on List View', async () => {
        await $('//android.widget.TextView[@text="ListView"]').click();
    });

    it('should scroll to item 100', async () => {
        const locateItem = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Item 100"))`;
        const tapItem = $(`android=${locateItem}`);
        await tapItem.waitForDisplayed({ timeout: 10000 });
        await tapItem.click();
        
        const itemClicked = $('//android.widget.TextView[@resource-id="android:id/message"]')
        await itemClicked.click();
    });

    it('should scroll to item 200', async () => {
        const locateItem = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Item 200"))`;
        const tapItem = $(`android=${locateItem}`);
        await tapItem.waitForDisplayed({ timeout: 10000 });
        await tapItem.click();
        
        const itemClicked = $('//android.widget.TextView[@resource-id="android:id/message"]')
        await itemClicked.click();
    });

    it('should scroll to item 300', async () => {
        const locateItem = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Item 300"))`;
        const tapItem = $(`android=${locateItem}`);
        await tapItem.waitForDisplayed({ timeout: 10000 });
        await tapItem.click();

        const itemClicked = $('//android.widget.TextView[@resource-id="android:id/message"]')
        await itemClicked.click();
    });

    it('should scroll to item 400', async () => {
        const locateItem = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Item 400"))`;
        const tapItem = $(`android=${locateItem}`);
        await tapItem.waitForDisplayed({ timeout: 10000 });
        await tapItem.click();
        
        const itemClicked = $('//android.widget.TextView[@resource-id="android:id/message"]')
        await itemClicked.click();
    });

    it('should scroll to item 500', async () => {
        const locateItem = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Item 500"))`;
        const tapItem = $(`android=${locateItem}`);
        await tapItem.waitForDisplayed({ timeout: 10000 });
        await tapItem.click();
        
        const itemClicked = $('//android.widget.TextView[@resource-id="android:id/message"]')
        await itemClicked.click();
    });
});