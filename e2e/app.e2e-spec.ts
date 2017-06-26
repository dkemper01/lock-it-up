import { AngularGiaaPage } from './app.po';

describe('angular-giaa App', () => {
  let page: AngularGiaaPage;

  beforeEach(() => {
    page = new AngularGiaaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
