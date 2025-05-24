import { IPage } from '../types/IPage';

class Page implements IPage {

    constructor(
        private _baseUrl: string,
        private _startingUrl: string,
        private _baseSelector: string,
        private _toggleSelector: string,
        private _firstChildSelector: string
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

    get nonToggleSelector() {
        return this._firstChildSelector;
    }
}