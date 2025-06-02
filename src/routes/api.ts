import { launchBrowser } from "../utils/launchBrowser.js";
import { startPage } from "../data/pages/startPage.js";
import { getUrls } from "../utils/getUrls.js";
import { HumanBehaviorSimulator } from "../utils/HumanBehaviourSimulator.js";
import { visitUrls } from "../utils/visitUrls.js";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { InitialValuesData } from "../types/InitialValuesData.js";

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

    const file = 'src/data/db.json';
    const adapter = new JSONFile<InitialValuesData>(file);
    const db = new Low<InitialValuesData>(adapter, { initialValues: [] });

    await db.read();

    // Wipe existing data
    db.data = { initialValues: [] }

    db.data.initialValues.push(...initialValuesObj);

    await db.write();

    await browser.close();
}