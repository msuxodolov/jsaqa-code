const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

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

Given('user is on page {string}', async function (string) {
  return await this.page.goto(`${string}`, {
    setTimeout: 20000,
  });
});

When("user clicks date", async function () {
  return await clickElement(this.page, "a:nth-child(2)");
});

When("user clicks time Stalker", async function () {
  clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='217']")
});

When("user clicks time Micki Mouse", async function () {
  clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='218']")
});

//When("user clicks time Gone with the wind", async function () {
//  clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='190']")
//});

Then("user the selection of the location and the start of the session opens {string}", async function (string) {
  const actual = await getText(this.page, "p.buying__info-start");
  const expected = await string;
  expect(actual).contains(expected);
});

When("user chooses a place", async function () {
  await clickElement(this.page, "div:nth-child(1) span:nth-child(8)");
});

When("user select an occupied place", async function () {
  await clickElement(this.page, "div:nth-child(1) span:nth-child(8)");
});

When("user book a place", async function () {
  await clickElement(this.page, "button.acceptin-button");
});

Then("user he has chosen a ticket and receives a code {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

When("user receives the booking code", async function () {
  await clickElement(this.page, "button.acceptin-button");
  });

Then("user gets a ticket {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
  });

Then("user the button is inactive{string}", async function (string) {
  const actual = String(
    await this.page.$eval("button", (button) => {
      return button.disabled;
    })
  );
  const expected = "true";
  expect(actual).contains(expected);
});






