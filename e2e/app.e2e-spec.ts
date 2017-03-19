import { ExamPaperGeneratorPage } from './app.po';

describe('exam-paper-generator App', () => {
  let page: ExamPaperGeneratorPage;

  beforeEach(() => {
    page = new ExamPaperGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
