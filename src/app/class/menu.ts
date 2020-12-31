import { Injectable } from '@angular/core';
import { Food } from './food.spec';
import { Drink } from './drink';

@Injectable()
export class Menu {

    private _name: String;
    private _date: Date;
    private _type: String;
    private _price: Number;
    private _status: Boolean;
    private _foods: Food[];
    private _drinks: Drink[];

    public set name(v: String) {
        this._name = v;
    }
    public set date(v: Date) {
        this._date = v;
    }
    public set price(v: Number) {
        this._price = v;
    }
    public set type(v: String) {
        this._type = v;
    }

    public set status(v: Boolean) {
        this._status = v;
    }

    public set foods(v: Food[]) {
        this._foods = v;
    }
    public set drinks(v: Drink[]) {
        this._drinks = v;
    }

    constructor(_name: String
        , _date: Date
        , _type: String
        , _price: Number
        , _status: Boolean, _foods: Food[], _drinks: Drink[]) {
        this.name = _name;
        this.date = _date;
        this.type = _type;
        this.price = _price;
        this.status = _status;
        this._drinks = _drinks;
        this._foods = _foods;

    }

}
