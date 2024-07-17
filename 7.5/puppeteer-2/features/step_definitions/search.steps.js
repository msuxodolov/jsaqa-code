const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on page", async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru/client/payment.php`, {
    setTimeout: 20000,
  });
});

When("user clicks date", async function () {
  return await clickElement(page, "page-nav__day page-nav__day_weekend[href='#'][data-time-stamp='1721422800']");
});

When("user clicks time Stalker", async function () {
  clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']")
});

When("user clicks time Micki Mouse", async function () {
  clickElement(page, ".movie-seances__time[href='#'][data-seance-id='218']")
});

When("user clicks time Gone with the wind", async function () {
  clickElement(page, ".movie-seances__time[href='#'][data-seance-id='190']")
});

Then("user the selection of the location and the start of the session opens {string}", async function (string) {
  const actual = await getText(this.page, "p.buying__info-start");
  const expected = await string;
  expect(actual).contains(expected);
});

When("user chooses a place", async function () {
  await clickElement(page, "buying-scheme__chair buying-scheme__chair_standart");
});

When("user select an occupied place", async function () {
  await clickElement(page, "buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_taken");
});

When("user book a place", async function () {
  await clickElement(page, "button.acceptin-button");
});

Then("user he has chosen a ticket and receives a code {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

When("user receives the booking code", async function () {
  await clickElement(page, "button.acceptin-button");
  });

Then("user gets a ticket {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
  });

Then("user the button is inactive", async function (string) {
  const actual = String(
    await this.page.$eval("button", (button) => {
      return button.disabled;
    })
  );
  const expected = "true";
  expect(actual).contains(expected);
});






