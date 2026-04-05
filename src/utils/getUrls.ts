import { Page } from "puppeteer";

export const getUrls = async (
    page: Page,
    baseSelector: string,
    baseUrl: string,
  ): Promise<string[]> => {
    const urlPaths = await page.$$eval(
      baseSelector,
      (links, baseSelector) => {
        return links.map(link => {
          return link.querySelector(baseSelector)?.getAttribute("href");
        });
      },
      baseSelector
    );
  
    const flattenedUrls = urlPaths.flat().filter((url): url is string => url !== null);

    return flattenedUrls.map(url => baseUrl + url);
};