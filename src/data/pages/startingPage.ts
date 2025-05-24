import { Page } from "../Page";

const baseUrl = "https://developer.mozilla.org";
const startingUrl = "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference";
const baseSelector = ".sidebar-body > ol > li:nth-of-type(9) > details > ol";
const toggleSelector = "details > ol > li > a";
const firstChildSelector = "a";

const startingPage = new Page(baseUrl, startingUrl, baseSelector, toggleSelector, firstChildSelector);

export default startingPage;