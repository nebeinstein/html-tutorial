import { HtmlTutorialPage } from './app.po';

describe('html-tutorial App', function() {
  let page: HtmlTutorialPage;

  beforeEach(() => {
    page = new HtmlTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
