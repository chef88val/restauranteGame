import { Waiter } from './waiter';
import { Drink } from './drink';
import { Food } from './food';
import { Injectable } from '@angular/core';
@Injectable()

export class Table {
    public name: String;
    public pax: Number;
    private _waiter: Waiter;
    private drinks: Drink[];
    private foods: Food[];
    public status: String;
    private get waiter(): Waiter {
        return this._waiter;
    }

    private set waiter(v: Waiter) {
        this._waiter = v;
    }

    constructor(_name: String, _pax: Number, _waiter?: Waiter, _drinks?: Drink[], _foods?: Food[], _status?: String) {
        this.name = _name;
        this.pax = _pax;
        this.waiter = _waiter;
        this.drinks = _drinks;
        this.foods = _foods;
        this.status = 'free';
    }




    setItem(type: String, obj: any) {
        if (type === 'drink') {
            this.drinks.push(obj);
        } else if (type === 'food') {
            this.foods.push(obj);
        }
    }

    changeStatus(newStatus: String) {
        this.status = newStatus;
    }
}
