import { Page } from "puppeteer";

export const getUrls = async (
    page: Page,
    baseSelector: string,
    baseUrl: string,
  ): Promise<string[]> => {
    
    const urlPaths = await page.$$eval(baseSelector, urlPaths => {
      return urlPaths.map(path => path.getAttribute('href'));
    });
  
    const flattenedUrls = urlPaths.flat().filter((url): url is string => url !== null);

    return flattenedUrls.map(url => baseUrl + url);
};