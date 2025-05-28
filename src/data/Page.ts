import { IPage } from '../types/IPage';

class Page implements IPage {

    constructor(
        private readonly _baseUrl: string,
        private readonly _startingUrl: string,
        private readonly _baseSelector: string,
        private readonly _toggleSelector: string,
        private readonly _firstChildSelector: string
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

    get toggleSelector() {
        return this._toggleSelector;
    }

    get firstChildSelector() {
        return this._firstChildSelector;
    }

    toJSON() {
        return {
            baseUrl: this._baseUrl,
            startingUrl: this._startingUrl,
            baseSelector: this._baseSelector,
            toggleSelector: this._toggleSelector,
            firstChildSelector: this._firstChildSelector
        };
    }
}