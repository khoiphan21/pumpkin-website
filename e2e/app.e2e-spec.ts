import { PumpkinWebsitePage } from './app.po';

describe('pumpkin-website App', () => {
  let page: PumpkinWebsitePage;

  beforeEach(() => {
    page = new PumpkinWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pumpkin works!');
  });
});
