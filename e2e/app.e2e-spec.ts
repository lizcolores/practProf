import { PractProfPage } from './app.po';

describe('pract-prof App', () => {
  let page: PractProfPage;

  beforeEach(() => {
    page = new PractProfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
