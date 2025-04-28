import { launchBrowser } from "../utils/launchBrowser";

export const callAPI = async () => {
    const { browser, page } = await launchBrowser();
    await page.goto("https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/");
    // await page.screenshot({ path: "src/data/temp/test-screenshot.png" });

    const linksSelector = ".sidebar-body > ol > li:nth-of-type(9) > details > ol > li";

    await page.waitForSelector(linksSelector);

    const propertyLinks = await page.$$eval(linksSelector, links => {
        return links.map(link => link.innerHTML);
    });
    // const propertyLinks = await page.$$(linksSelector)
    console.log(propertyLinks);



    await browser.close();
} 