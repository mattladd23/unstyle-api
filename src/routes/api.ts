import { launchBrowser } from "../utils/launchBrowser";

export const callAPI = async () => {
    const { browser, page } = await launchBrowser();
    await page.goto("https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/");
    // await page.screenshot({ path: "src/data/temp/test-screenshot.png" });


    // Get all top level links
    const topLevelLinkSelector = ".sidebar-body > ol > li:nth-of-type(9) > details > ol > li > a";    
    await page.waitForSelector(topLevelLinkSelector);
    const topLevelLinks = await page.$$eval(topLevelLinkSelector, links => {
        return links.map(link => {
            return {
                name: link.innerHTML,
                href: link.getAttribute("href")
            }
        });
    });


    // Get all bottom level links
    const bottomLevelLinkSelector = ".sidebar-body > ol > li:nth-of-type(9) > details > ol > li > details > ol > li > a";
    await page.waitForSelector(bottomLevelLinkSelector);
    const bottomLevelLinks = await page.$$eval(bottomLevelLinkSelector, links => {
        return links.map(link => {
            return {
                name: link.innerHTML,
                href: link.getAttribute("href")
            }
        });
    });

    console.log(topLevelLinks);
    console.log(bottomLevelLinks);

    await browser.close();
} 