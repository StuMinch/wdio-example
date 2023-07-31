const assert = require('assert');

describe('capture events', () => {
    it('capture the events from browser', async () => {
        browser.url('https://google.com');
        var request = browser.getRequest(0);
        assert.equal(request.method, 'GET');
        browser.pause(1000);
    });
  });