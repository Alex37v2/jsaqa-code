let page;

afterEach(() => {
  // после каждого теста
  page.close(); // вкладка закрывается
  // browser.close(); // браузер закрывается
});

describe("Github page tests", () => {
  // тесты страницы Github
  beforeEach(async () => {
    // перед каждым тестом
    page = await browser.newPage(); // открыввется новая вкладка в браузере
    await page.goto("https://github.com/team"); // загружается страница с адресом...
  });
  test("The h1 header content'", async () => {
    // тестируем содержимое заголовка с тегом h1
    await page.setDefaultTimeout(2000); // устанавливаем таймаут для увеличения время выполнения каждого шага теста
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  });

  test("The first link attribute", async () => {
    await page.setDefaultTimeout(2000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.setDefaultTimeout(2000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  });
});
describe("Explore page tests2", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/explore");
  });
  test("The h2 header content Explore", async () => {
    await page.setDefaultTimeout(3000);
    const actual = await page.$eval(
      "div.site-subnav div > a:nth-child(2)",
      (text) => text.textContent
    ); // textContent возвращает то что содержится по селоктору в виде текста и сохраняет в переменную
    expect(actual).toContain("Explore");
  });
  test("The h2 header content Topics", async () => {
    await page.setDefaultTimeout(3000);
    const actual = await page.$eval(
      "div.site-subnav div > a:nth-child(3)",
      (text) => text.textContent
    ); // textContent возвращает то что содержится по селоктору в виде текста и сохраняет в переменную
    expect(actual).toContain("Topics");
  });
  test("The h2 header content Trending", async () => {
    await page.setDefaultTimeout(3000);
    const actual = await page.$eval(
      "div.site-subnav div > a:nth-child(4)",
      (text) => text.textContent
    ); // textContent возвращает то что содержится по селоктору в виде текста и сохраняет в переменную
    expect(actual).toContain("Trending");
  });
});
