import { Page } from 'puppeteer';

export const getInitialValue = async (page: Page, url: string) => {
    const initialValueResult = await page.$$eval(".properties tr:first-child", (rows, urlFromNode) => {
        if (!rows[0]) {
            return {
                value: "No values table found",
                foundInitialValue: false,
                url: urlFromNode,
                valuesFound: 0
            };
        }
        if (rows[0].querySelector('a')?.textContent?.includes("Initial value")) {
            const initialValueCount = rows[0].querySelectorAll('code');
            return {
                value: initialValueCount[0].textContent?.trim(),
                foundInitialValue: true,
                url: urlFromNode,
                valuesFound: initialValueCount.length
            };
        } else {
            return {
                value: "No initial value found",
                foundInitialValue: false,
                url: urlFromNode,
                valuesFound: 0
            };
        }
    },
        url
    );
    return {
        value: initialValueResult.value,
        foundInitialValue: initialValueResult.foundInitialValue,
        url: initialValueResult.url,
        valuesFound: initialValueResult.valuesFound
    };
}