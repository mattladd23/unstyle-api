import { Page } from 'puppeteer';

export const getInitialValue = async (page: Page, url: string) => {
    const initialValueResult = await page.$$eval(".properties tr:first-child", (rows) => {
        if (!rows[0]) {
            return { value: "No values table found", foundInitialValue: false };
        }
        if (rows[0].querySelector('a')?.textContent?.includes("Initial value")) {            
            return { value: rows[0].querySelector('code')?.textContent?.trim(), foundInitialValue: true };
        } else {
            return { value: "No initial value found", foundInitialValue: false };
        }
    });
    return { value: initialValueResult.value, foundInitialValue: initialValueResult.foundInitialValue };
}