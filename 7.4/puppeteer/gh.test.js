let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 6000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 6000);
});


describe("Github Pricing tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/pricing");
  });
  test("The h1 header pricing'", async () => {
    const firstLink = await page.$("h1[class='h2-mktg']");
    await firstLink.click();
    await page.waitForSelector('h2');
    const title1 = await page.title();
    expect(title1).toEqual('Pricing · Plans for every developer · GitHub');
  }, 6000);

  test("GitHub Copilot Interaction", async () => {
    const actual = await page.$eval("div", link => link.textContent);
    expect(actual).toContain("GitHub Copilot");
  }, 6000);

  test("Join for free Interaction", async () => {
    const btnSelector = ".btn-muted-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Join for free");
  }, 6000);
});
