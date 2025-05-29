import { launchBrowser } from "../utils/launchBrowser.js";
import { startPage } from "../data/pages/startPage.js";
import { getUrls } from "../utils/getUrls.js";
import { HumanBehaviorSimulator } from "../utils/HumanBehaviourSimulator.js";

export const callAPI = async () => {
    const { browser, page } = await launchBrowser();
    const humanBehaviorSimulator = new HumanBehaviorSimulator(page);

    await page.goto(startPage.startingUrl);

    await humanBehaviorSimulator.simulateRandomBehavior();

    const urls = await getUrls(
        page,
        startPage.baseSelector,
        startPage.toggleSelector,
        startPage.firstChildSelector,
        startPage.baseUrl
    );

    console.log(urls);

    await browser.close();
}