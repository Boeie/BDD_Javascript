describe('Automation Testing with The Internet paractise', () => {
  beforeEach(async () => {
    jest.setTimeout(10000);
    await page.goto('https://the-internet.herokuapp.com/');
  })

  it('should display The Internet as the page title', async () => {
    const pageTitle = await page.title();
    expect(pageTitle).toMatch('The Internet');
  })
})