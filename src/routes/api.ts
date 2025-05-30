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

    // console.log(urls);

    let numUrlsVisited: number = 0;
    let notEmptyInitialValues: number = 0;

    for (const url of urls) {
        if (numUrlsVisited >= urls.length) { return; }
        await page.goto(url);
        numUrlsVisited++;
        console.log(`Navigating to: ${url}`);
        await humanBehaviorSimulator.simulateRandomBehavior();
        const initialValue = await page.$$eval(".properties tr:first-child", (values) => {
            if (!values[0]) {
                return { value: "No values table found", foundInitialValue: false };
            }
            if (values[0].querySelector('a')?.textContent?.includes("Initial value")) {
                return { value: values[0].querySelector('code')?.textContent?.trim(), foundInitialValue: true };
            } else {
                return { value: "No initial value found", foundInitialValue: false };
            }
        });

        if (initialValue.foundInitialValue) {
            notEmptyInitialValues++;
        }

        console.log({
            "url": url,
            "initialValue": initialValue
        });
        
        console.log(`Visited ${numUrlsVisited} URLs, found ${notEmptyInitialValues} with initial values.`);
    }

    await browser.close();
}