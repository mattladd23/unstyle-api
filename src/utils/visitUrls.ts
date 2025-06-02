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

    let urlsWithNoValuesTable: string[] = [];
    let urlsWithNoInitialValue: string[] = [];
    let urlsWithMultipleInitialValues: string[] = [];

    let initialValues: object[] = [];

    for (const url of urls) {
        await page.goto(url);
        numUrlsVisited++;
        console.log(`Navigating to: ${url}`);
        await humanBehaviorSimulator.simulateRandomBehavior();
        const initialValue = await getInitialValue(page, url);
        console.log(`Initial value: ${initialValue.value}\n`);
        if (initialValue.foundInitialValue) {
            notEmptyInitialValues++;
        }
        if (initialValue.value === "No values table found") {
            urlsWithNoValuesTable.push(url);
        } else if (initialValue.value === "No initial value found") {
            urlsWithNoInitialValue.push(url);
        } else if (initialValue.valuesFound > 1) {
            urlsWithMultipleInitialValues.push(url);
        } else if (initialValue.valuesFound === 1) {
            initialValues.push({
                url: initialValue.url,
                initialValue: initialValue.value,
            });
        }
        console.log(`Visited ${numUrlsVisited} URLs, found ${notEmptyInitialValues} with initial values.\n`);
        if (numUrlsVisited >= urls.length) { break; }
    }

    // console.log(`\nSummary of URLs visited:`);
    // console.log(`Total URLs visited: ${numUrlsVisited}`);
    // console.log(`Total URLs with initial values: ${notEmptyInitialValues}`);
    // console.log(`Total URLs with no values table: ${urlsWithNoValuesTable.length}`);
    // console.log(`Total URLs with no initial value: ${urlsWithNoInitialValue.length}`);
    // console.log(`Total URLs with multiple initial values: ${urlsWithMultipleInitialValues.length}`);
    
    // if (urlsWithNoValuesTable.length > 0) {
    //     console.log(`URLs with no values table: ${urlsWithNoValuesTable.join(', ')}`);
    // }
    
    // if (urlsWithNoInitialValue.length > 0) {
    //     console.log(`URLs with no initial value: ${urlsWithNoInitialValue.join(', ')}`);
    // }
    
    // if (urlsWithMultipleInitialValues.length > 0) {
    //     console.log(`URLs with multiple initial values: ${urlsWithMultipleInitialValues.join(', ')}`);
    // }

    return initialValues;
}