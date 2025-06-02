import { Page } from 'puppeteer';

export const getInitialValue = async (page: Page, url: string) => {
    const initialValueResult = await page.$$eval(
        ".properties tr:first-child",
        (rows, urlFromNode) => {
            if (!rows[0]) {
                return {
                    value: "No values table found",
                    foundInitialValues: false,
                    url: urlFromNode,
                    valuesFound: 0,
                    resolvedInitialValue: false
                };
            }

            const anchor = rows[0].querySelector('a');
            const anchorText = anchor?.textContent || '';

            if (anchorText.includes("Initial value")) {
                const codeElements = rows[0].querySelectorAll('code');

                if (codeElements.length > 1 && codeElements[0]?.textContent) {
                    return {
                        value: "Initial value label found, multiple <code> elements present",
                        foundInitialValues: true,
                        url: urlFromNode,
                        valuesFound: codeElements.length,
                        resolvedInitialValue: false
                    };
                } else if (codeElements.length === 1 && codeElements[0]?.textContent) {
                    return {
                        value: codeElements[0].textContent.trim(),
                        foundInitialValues: true,
                        url: urlFromNode,
                        valuesFound: codeElements.length,
                        resolvedInitialValue: true
                    };
                }

                return {
                    value: "Initial value label found, but no <code> content",
                    foundInitialValues: false,
                    url: urlFromNode,
                    valuesFound: 0,
                    resolvedInitialValue: false
                };
            }

            return {
                value: "No initial value found",
                foundInitialValues: false,
                url: urlFromNode,
                valuesFound: 0,
                resolvedInitialValue: false
            };
        },
        url
    );

    return initialValueResult;
};