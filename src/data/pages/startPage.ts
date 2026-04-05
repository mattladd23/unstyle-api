import { Page } from '../Page.js';

const baseUrl = "https://developer.mozilla.org";
const startingUrl = "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties";
const baseSelector = ".content-section ul a:has(code)";

export const startPage = new Page(baseUrl, startingUrl, baseSelector);