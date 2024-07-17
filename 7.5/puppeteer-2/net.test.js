const { clickElement, putText, getText } = require("./lib/commands.js");


let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Netology.ru tests", () => {
  beforeEach(async () => {
    await page.goto("https://qamid.tmweb.ru/client/payment.php");
  });

  test("Stalker positive test", async () => {
    await clickElement(page, "a:nth-child(2)"),
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']");
    expect(await getText(page, "p.buying__info-start")).toContain("Начало сеанса: 13:00");
    await clickElement(page, "div:nth-child(1) span:nth-child(3)");
    await clickElement(page, "button.acceptin-button");
    expect(await getText(page, "h2.ticket__check-title")).toContain("Вы выбрали билеты:");
    await clickElement(page, "button.acceptin-button");
    expect(await getText(page, "h2.ticket__check-title")).toContain("Электронный билет");
  });

  
  test("Micki-Mouse positive test", async () => {
    await clickElement(page, "a:nth-child(2)"),
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='218']");
    expect(await getText(page, "p.buying__info-start")).toContain("Начало сеанса: 00:00");
    await clickElement(page, "div:nth-child(1) span:nth-child(5)");
    await clickElement(page, "button.acceptin-button");
    expect(await getText(page, "h2.ticket__check-title")).toContain("Вы выбрали билеты:");
    await clickElement(page, "button.acceptin-button");
    expect(await getText(page, "h2.ticket__check-title")).toContain("Электронный билет");
  });

  test("Gone with the wind occupied place", async () => {
    await clickElement(page, "a:nth-child(2)"),
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']");
    expect(await getText(page, "p.buying__info-start")).toContain("Начало сеанса: 13:00");
    await clickElement(page, "div:nth-child(1) span:nth-child(3)");
    expect(
      String(
        await page.$eval("button", (button) => {
          return button.disabled;
        })
      )
    ).toContain("true");
  });
});