const { test, expect } = require("@playwright/test");
<<<<<<< HEAD
const { chromium } = require("playwright");
const { email, password } = require("../user.js");

test("authorization is positive", async ({ page }) => {
 await Promise.all([
  page.waitForNavigation(/*{ url: 'https://netology.ru/?modal=sign_in' }*/),
  page.click('text=Войти')
]);

 await page.click('[placeholder="Email"]', email);
 await page.click('[placeholder="Пароль"]', password);

 await page.click('[data-testid="login-submit-btn"]');
=======

test("test", async ({ page }) => {
  // Go to https://netology.ru/free/management#/
  await page.goto("https://netology.ru/free/management#/");

  // Click a
  await page.click("a");
  await expect(page).toHaveURL("https://netology.ru/");

  // Click text=Учиться бесплатно
  await page.click("text=Учиться бесплатно");
  await expect(page).toHaveURL("https://netology.ru/free");

  page.click("text=Бизнес и управление");

  // Click text=Как перенести своё дело в онлайн
  await page.click("text=Как перенести своё дело в онлайн");
  await expect(page).toHaveURL(
    "https://netology.ru/programs/kak-perenesti-svoyo-delo-v-onlajn-bp"
  );
>>>>>>> 4314e66b2d72fde376be175c510d5b085d787255
});
