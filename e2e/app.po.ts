import { browser, element, by } from 'protractor';

export class ExamPaperGeneratorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
