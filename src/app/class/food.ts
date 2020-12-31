import { Injectable } from '@angular/core';
@Injectable()
export class Food {
    private name: String;
    private price: Number;
    private quant: Number;
    private _tag: String; public set tag(v: String) {
        this._tag = v;
    }

    public get tag(): String {
        return this._tag;
    }
    constructor(_name: String, _price: Number, _quant: Number) {
        this._tag = 'Food';
        this.name = _name;
        this.price = _price;
        this.quant = _quant;
    }
}
