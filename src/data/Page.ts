import { IPage } from '../types/IPage.js';

export class Page implements IPage {

    constructor(
        private readonly _baseUrl: string,
        private readonly _startingUrl: string,
        private readonly _baseSelector: string,
    ) {}

    get baseUrl() {
        return this._baseUrl;
    }

    get startingUrl() {
        return this._startingUrl;
    }

    get baseSelector() {
        return this._baseSelector;
    }

    toJSON() {
        return {
            baseUrl: this._baseUrl,
            startingUrl: this._startingUrl,
            baseSelector: this._baseSelector
        };
    }
}