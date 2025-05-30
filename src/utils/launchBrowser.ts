import puppeteer, { Browser, Page, BrowserContext} from "puppeteer";

export const launchBrowser = async (): Promise<{
    browser: Browser;
    page: Page;
}> => {
    console.log("Launching puppeteer...");

    // Launch a new browser instance
    const browser: Browser = await puppeteer.launch({ headless: false, timeout: 60000 });

    // Create new context to encapsulate future strategies
    const context: BrowserContext = await browser.createBrowserContext();

    // Open a new page (tab) in the browser
    const page = await context.newPage();

    // Return both the browser and the page
    return { browser, page };
}