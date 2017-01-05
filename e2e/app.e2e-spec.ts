import { HalloweenClickerPage } from './app.po';

describe('halloween-clicker App', function() {
  let page: HalloweenClickerPage;

  beforeEach(() => {
    page = new HalloweenClickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
