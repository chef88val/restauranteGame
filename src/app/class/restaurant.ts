import { Injectable } from '@angular/core';
import { Menu } from 'src/app/class/menu';

@Injectable()
export class Restaurant {

    public id: String;
    private _name: String;
    private _date: Date;
    private _type: String;
    private _price: Number;
    private _status: Boolean;
    private _menus: Menu[];
    private _currentLevel: Number;
    private _nLevels: Number;

    
    public get nLevels() : Number {
        return this._nLevels;
    }

    
    public set nLevels(v : Number) {
        this._nLevels = v;
    }
    
    

    public set name(v: String) {
        this._name = v;
    }

    public get name(): String {
        return this._name;
    }

    public set date(v: Date) {
        this._date = v;
    }
    public get date(): Date {
        return this._date;
    }
    public set price(v: Number) {
        this._price = v;
    }
    public get price(): Number {
        return this._price;
    }
    public set type(v: String) {
        this._type = v;
    }
    public get type(): String {
        return this._type;
    }
    public set status(v: Boolean) {
        this._status = v;
    }
    public get status(): Boolean {
        return this._status;
    }
    public set menus(v: Menu[]) {
        this._menus = v;
    }
    public get menus(): Menu[] {
        return this._menus;
    }
    public set currentLevel(v: Number) {
        this._currentLevel = v;
    }
    public get currentLevel(): Number {
        return this._currentLevel;
    }
    constructor(_name: String
        , _date: Date
        , _type: String
        , _price: Number
        , _status: Boolean, _menus: Menu[], nLevels: Number) {
        this.name = _name;
        this.date = _date;
        this.type = _type;
        this.price = _price;
        this.status = _status;
        this.menus = _menus;
        this._currentLevel = 1;
        this.nLevels = nLevels;
        //this.id= this.buildRestauranteCode('A',1)
    }

    buildRestauranteCode(codeRestaurant?: String, lvl?: Number){
        return codeRestaurant+ String(lvl);
    }


}
