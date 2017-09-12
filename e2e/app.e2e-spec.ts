import { FirebasetestPage } from './app.po';

describe('firebasetest App', () => {
  let page: FirebasetestPage;

  beforeEach(() => {
    page = new FirebasetestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
