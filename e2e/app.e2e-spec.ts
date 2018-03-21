import { TbdPage } from './app.po';

describe('tbd App', () => {
  let page: TbdPage;

  beforeEach(() => {
    page = new TbdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
