import { Page } from 'puppeteer';

export const getInitialValue = async (page: Page, url: string) => {
    const initialValueResult = await page.$$eval(
        ".properties tr:first-child",
        (rows, urlFromNode) => {
            if (!rows[0]) {
                return {
                    value: "No values table found",
                    foundInitialValue: false,
                    url: urlFromNode,
                    valuesFound: 0
                };
            }

            const anchor = rows[0].querySelector('a');
            const anchorText = anchor?.textContent || '';

            if (anchorText.includes("Initial value")) {
                const codeElements = rows[0].querySelectorAll('code');

                if (codeElements.length > 1 && codeElements[0]?.textContent) {
                    return {
                        value: "Initial value label found, multiple <code> elements present",
                        foundInitialValue: true,
                        url: urlFromNode,
                        valuesFound: codeElements.length
                    };
                } else if (codeElements.length === 1 && codeElements[0]?.textContent) {
                    return {
                        value: codeElements[0].textContent.trim(),
                        foundInitialValue: true,
                        url: urlFromNode,
                        valuesFound: codeElements.length
                    };
                }

                return {
                    value: "Initial value label found, but no <code> content",
                    foundInitialValue: false,
                    url: urlFromNode,
                    valuesFound: 0
                };
            }

            return {
                value: "No initial value found",
                foundInitialValue: false,
                url: urlFromNode,
                valuesFound: 0
            };
        },
        url
    );

    return initialValueResult;
};