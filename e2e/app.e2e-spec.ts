import { MaplyPage } from './app.po';

describe('maply App', () => {
  let page: MaplyPage;

  beforeEach(() => {
    page = new MaplyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
