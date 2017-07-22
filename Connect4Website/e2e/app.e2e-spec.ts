import { Connect4WebsitePage } from './app.po';

describe('connect4-website App', () => {
  let page: Connect4WebsitePage;

  beforeEach(() => {
    page = new Connect4WebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
