import { Ang2FileUploadPage } from './app.po';

describe('ang2-file-upload App', function() {
  let page: Ang2FileUploadPage;

  beforeEach(() => {
    page = new Ang2FileUploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
