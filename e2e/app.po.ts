import { browser, by, element } from 'protractor';

export class PumpkinWebsitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pumpkin-root h1')).getText();
  }
}
