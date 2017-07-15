import { WaashgreenAppPage } from './app.po';

describe('waashgreen-app App', () => {
  let page: WaashgreenAppPage;

  beforeEach(() => {
    page = new WaashgreenAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
