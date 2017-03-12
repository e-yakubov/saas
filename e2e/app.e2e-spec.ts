import { Fontend.DevPage } from './app.po';

describe('fontend.dev App', () => {
  let page: Fontend.DevPage;

  beforeEach(() => {
    page = new Fontend.DevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
