import { launchBrowser } from "../utils/launchBrowser";

export const callAPI = async () => {
    const { browser, page } = await launchBrowser();
    await page.goto("https://www.bbc.co.uk/");
    await page.screenshot({ path: "src/data/temp/test-screenshot.png" });

    await browser.close();
} 