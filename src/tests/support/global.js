const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class Global {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async launchBrowser() {
    this.browser = await chromium.launch({ headless: true });
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(Global);
