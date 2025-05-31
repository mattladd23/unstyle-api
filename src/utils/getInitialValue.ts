import { Page } from 'puppeteer';

export const getInitialValue = async (page: Page, url: string) => {
    const initialValueResult = await page.$$eval(".properties tr:first-child", (rows, urlFromNode) => {
        if (!rows[0]) {
            return { value: "No values table found", foundInitialValue: false, url: urlFromNode };
        }
        if (rows[0].querySelector('a')?.textContent?.includes("Initial value")) {
            const initialValueCount = rows[0].querySelectorAll('code').length;            
            return { value: initialValueCount, foundInitialValue: true, url: urlFromNode };
        } else {
            return { value: "No initial value found", foundInitialValue: false, url: urlFromNode};
        }
    },
        url
    );
    return { value: initialValueResult.value, foundInitialValue: initialValueResult.foundInitialValue, url: initialValueResult.url };
}