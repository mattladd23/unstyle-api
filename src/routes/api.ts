import { launchBrowser } from "../utils/launchBrowser";

export const callAPI = async () => {
    const { browser, page } = await launchBrowser();
    await page.goto("https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/");
    // await page.screenshot({ path: "src/data/temp/test-screenshot.png" });

    const selectorsList = ".sidebar-body > ol > li:nth-of-type(8) > details > ol > li";

    await page.waitForSelector(selectorsList);

    const sidebar = await page.$$eval(selectorsList, el => el.length);
    console.log(sidebar);

    await browser.close();
} 