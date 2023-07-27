const assert = require('assert');

describe('capture events', () => {
    it('capture the events from browser', async () => {
        browser.url('https://google.com');
        var request = browser.getRequest(0);
        assert.equal(request.method, 'GET');
        browser.pause(1000);
        //const logo = await $('#hplogoo');
        //await logo.waitForDisplayed({ timeout: 3000 });
        //await logo.click();;
        //browser.pause(1000);
        //browser.expectRequest('GET', '/gen_204?atyp=i&ct=rcm&cad=&ei=v4fBZO-BHvay0PEPueuKiAQ&ved=&jsname=&zx=1690404805465&opi=89978449', 204);
        //browser.assertRequests();
    });
  });