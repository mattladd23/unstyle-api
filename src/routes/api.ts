import { launchBrowser } from "../utils/launchBrowser.js";
import { startPage } from "../data/pages/startPage.js";

export const callAPI = async () => {
    const { browser, page } = await launchBrowser();

    await page.goto(startPage.startingUrl);

    const getUrlPaths = await page.$$eval(
        startPage.baseSelector,
        (links, toggleSelector, firstChildSelector) => {
          return links.map(link => {
            if (link.classList.contains("toggle")) {
              const els = Array.from(link.querySelectorAll(toggleSelector));
              return els.map(el => el.getAttribute("href"));
            } else {
              return link.querySelector(firstChildSelector)?.getAttribute("href");
            }
          });
        },
        startPage.toggleSelector,
        startPage.firstChildSelector
    );

    const flattenedUrlPaths = getUrlPaths.flat().filter(url => url !== null);

    const urls = flattenedUrlPaths.map(url => startPage.baseUrl + url);
    console.log(urls);

    await browser.close();
}