import { Page } from 'puppeteer';
import { HumanBehaviorSimulator } from './HumanBehaviourSimulator.js';
import { getInitialValue } from './getInitialValue.js';

export const visitUrls = async (
    urls: string[],
    page: Page,
    humanBehaviorSimulator: HumanBehaviorSimulator
    ) => {

    let numUrlsVisited: number = 0;
    let notEmptyInitialValues: number = 0;

    for (const url of urls) {
        if (numUrlsVisited >= urls.length) { return; }
        await page.goto(url);
        numUrlsVisited++;
        console.log(`Navigating to: ${url}`);
        await humanBehaviorSimulator.simulateRandomBehavior();
        const initialValue = await getInitialValue(page, url);
        console.log(`Initial value: ${initialValue.value}\n`);
        if (initialValue.foundInitialValue) {
            notEmptyInitialValues++;
        }
        console.log(`Visited ${numUrlsVisited} URLs, found ${notEmptyInitialValues} with initial values.\n`);
    }
}