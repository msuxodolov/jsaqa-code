const { test, expect } = require("@playwright/test");
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
});
