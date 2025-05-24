import { launchBrowser } from "../utils/launchBrowser";
import startingPage from "../data/pages/startingPage";

export const callAPI = async () => {
    const { browser, page } = await launchBrowser();

    // const startingUrl = "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference";
    // const baseUrl = "https://developer.mozilla.org";

    await page.goto(startingPage.startingUrl);    

    const getUrlPaths = await page.$$eval(startingPage.baseSelector, links => {        
        return links.map(link => {
            if (link.classList[0] == "toggle") {
                const els = Array.from(link.querySelectorAll(startingPage.toggleSelector));
                return els.map(el => {
                    return el.getAttribute("href");
                })
            } else {
                return link.querySelector(startingPage.firstChildSelector)?.getAttribute("href");
            }            
        });
    });

    const flattenedUrlPaths = getUrlPaths.flat().filter(url => url !== null);

    const urls = flattenedUrlPaths.map(url => startingPage.baseUrl + url);
    console.log(urls);

    await browser.close();
} 