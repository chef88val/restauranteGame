import { Cooker } from './cooker';
import { Injectable } from '@angular/core';
@Injectable()
export class Kitchen {
    private name: String;
    private nCookers: Number;
    private cookers: Cooker[];
    private _tag: String;
    constructor( _name: String, _nCookers: Number, _cookers: Cooker[]) {
        this.tag = 'Kitchen';
        this.cookers = _cookers;
        this.name = _name;
        this.nCookers = _nCookers;
    }
    public set tag(v: String) {
        this._tag = v;
    }

    public get tag(): String {
        return this._tag;
    }
}
