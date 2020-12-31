import { Injectable } from '@angular/core';
@Injectable()
export class Drink {
    private name: String;
    private price: Number;
    private quant: Number;
    private _tag: String;
    constructor(_name: String, _price: Number, _quant: Number) {
        this.tag = 'Drink';
        this.name = _name;
        this.price = _price;
        this.quant = _quant;
    }
    public set tag(v: String) {
        this._tag = v;
    }

    public get tag(): String {
        return this._tag;
    }
}
