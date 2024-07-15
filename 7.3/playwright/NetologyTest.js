const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Каталог курсов");
<<<<<<< HEAD
  await page.click("text=Полный каталог");
=======
>>>>>>> 4314e66b2d72fde376be175c510d5b085d787255
  await page.pause();

  //assertion
  await browser.close();
})();
