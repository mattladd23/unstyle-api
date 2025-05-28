import { Page } from "puppeteer";

export const getUrls = async (
    page: Page,
    baseSelector: string,
    toggleSelector: string,
    firstChildSelector: string,
    baseUrl: string,
  ): Promise<string[]> => {
    const urlPaths = await page.$$eval(
      baseSelector,
      (links, toggleSelector, firstChildSelector) => {
        return links.map(link => {
          if (link.classList.contains("toggle")) {
            const els = Array.from(link.querySelectorAll(toggleSelector));
            return els.map(el => el.getAttribute("href"));
          } else {
            return link.querySelector(firstChildSelector)?.getAttribute("href");
          }
        });
      },
      toggleSelector,
      firstChildSelector
    );
  
    const flattenedUrls = urlPaths.flat().filter((url): url is string => url !== null);

    return flattenedUrls.map(url => baseUrl + url);
};