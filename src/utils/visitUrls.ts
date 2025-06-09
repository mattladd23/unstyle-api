import { Page } from 'puppeteer';
import { HumanBehaviorSimulator } from './HumanBehaviourSimulator.js';
import { v4 as uuidv4 } from 'uuid';
import { getInitialValue } from './getInitialValue.js';
import { InitialValue } from '../types/InitialValue.js';
import { describeUrls } from './describeUrls.js';

export const visitUrls = async (
    urls: string[],
    page: Page,
    humanBehaviorSimulator: HumanBehaviorSimulator
    ) => {

    let numUrlsVisited: number = 0;
    let order: number = 0;

    let urlsWithNoValuesTable: string[] = [];
    let urlsWithNoInitialValue: string[] = [];
    let urlsWithMultipleInitialValues: string[] = [];

    let initialValues: InitialValue[] = [];

    for (const url of urls) {
        await page.goto(url);
        numUrlsVisited++;
        console.log(`Navigating to: ${url}`);
        await humanBehaviorSimulator.simulateRandomBehavior();
        const initialValue = await getInitialValue(page, url);
        console.log(`Initial value: ${initialValue.value}\n`);
        if (initialValue.resolvedInitialValue) {
            order++;
        }
        if (initialValue.value === "No values table found") {
            urlsWithNoValuesTable.push(url);
        } else if (initialValue.value === "No initial value found") {
            urlsWithNoInitialValue.push(url);
        } else if (initialValue.valuesFound > 1) {
            urlsWithMultipleInitialValues.push(url);
        } else if (initialValue.valuesFound === 1) {
            initialValues.push({
                id: uuidv4(),
                url: initialValue.url,
                initialValue: initialValue.value,
                order: order,
            });
        }
        console.log(`Visited ${numUrlsVisited} URLs, resolved ${order} initial values.\n`);
        if (numUrlsVisited >= urls.length) { break; }
        // if (numUrlsVisited >= 5) { break; }
    }

    describeUrls(numUrlsVisited, order, urlsWithNoValuesTable, urlsWithNoInitialValue, urlsWithMultipleInitialValues);
    
    return initialValues;
}