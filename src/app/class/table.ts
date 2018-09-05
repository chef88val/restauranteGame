import { Waiter } from './waiter';
import { Drink } from './drink';
import { Food } from './food';

export class Table {
    public name: String;
    private pax: Number;
    private waiter: Waiter;
    private drinks: Drink[];
    private foods: Food[];
    private status: String;
    constructor(_name: String, _pax: Number, _waiter?: Waiter, _drinks?: Drink[], _foods?: Food[], _status?: String) {
        this.name = _name;
        this.pax = _pax;
        this.waiter = _waiter;
        this.drinks = _drinks;
        this.foods = _foods;
        this.status = 'draft';
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
