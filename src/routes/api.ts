import { launchBrowser } from "../utils/launchBrowser.js";

export const callAPI = async () => {
    const { browser, page } = await launchBrowser();

    const startingUrl = "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference";
    const baseUrl = "https://developer.mozilla.org";

    await page.goto(startingUrl);    

    const getUrlPaths = await page.$$eval(".sidebar-body > ol > li:nth-of-type(9) > details > ol > li", links => {        
        return links.map(link => {
            if (link.classList[0] == "toggle") {
                const els = Array.from(link.querySelectorAll("details > ol > li > a"));
                return els.map(el => {
                    return el.getAttribute("href");
                })
            } else {
                return link.querySelector("a")?.getAttribute("href");
            }            
        });
    });

    const flattenedUrlPaths = getUrlPaths.flat().filter(url => url !== null);

    const urls = flattenedUrlPaths.map(url => baseUrl + url);
    console.log(urls);

    await browser.close();
} 