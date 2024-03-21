describe('Redcap Service Suite', () => {
  it('should click through lots of things', async () => {
    await browser.setTimeout({ 'script': 60000 });
    await browser.url('https://stagedash.redcapvalet.com/1/login');
    expect(browser).toHaveTitle('Login - Redcap Service Suite');
    const username = await $('#email_address');
    const password = await $('#password');
    const login = await $("//button[contains(@class, 'button')]");
    await username.click();
    await username.setValue('StageTestUser@solera.com');
    await password.click();
    await password.setValue('Password2');
    await login.click();
  });
});