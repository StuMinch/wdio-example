import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions

def check_version(options):
    driver = webdriver.Remote(command_executor="https://ondemand.us-west-1.saucelabs.com:443/wd/hub", options=options)
    print(f"Sauce Session: https://app.saucelabs.com/tests/"+driver.session_id)
    driver.get('https://google.com/chrome')
    print(f"Chrome version is: ", driver.capabilities['browserVersion'])
    driver.quit()

def test_chrome_version():
    options = ChromeOptions()
    options.browser_version = 'latest'
    options.platform_name = 'Windows 10'
    sauce_options = {}
    sauce_options['username'] = 'sminch'
    sauce_options['accessKey'] = '79d488b6-2fe2-4ee3-971a-9e0cda654a40'
    sauce_options['build'] = 'Browser Version Check'
    sauce_options['name'] = 'Chrome Latest'
    sauce_options['extendedDebugging'] = True
    options.set_capability('sauce:options', sauce_options)

    check_version(options)

test_chrome_version()

