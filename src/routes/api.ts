import { launchBrowser } from "../utils/launchBrowser.js";
import { startPage } from "../data/pages/startPage.js";
import { getUrls } from "../utils/getUrls.js";
import { HumanBehaviorSimulator } from "../utils/HumanBehaviourSimulator.js";
import { visitUrls } from "../utils/visitUrls.js";
import { updateDb } from "../data/db.js";

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

    const initialValuesObj = await visitUrls(urls, page, humanBehaviorSimulator);

    await updateDb(initialValuesObj);    

    await browser.close();
}