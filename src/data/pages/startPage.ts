import { Page } from '../Page.js';

const baseUrl = "https://developer.mozilla.org";
const startingUrl = "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference";
const baseSelector = ".sidebar-body > ol > li:nth-of-type(9) > details > ol > li";
const toggleSelector = "details > ol > li > a";
const firstChildSelector = "a";

export const startPage = new Page(baseUrl, startingUrl, baseSelector, toggleSelector, firstChildSelector);