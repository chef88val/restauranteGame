import { Drink } from './drink';
import { Food } from './food';

export class LoadItemWaiter {
    private table: String;
    private item: any;
    constructor(_table: String, _item: any) {
        this.table = _table;
        this.item = _item;
    }
}
export class Waiter {
    public name: String;
    private hands: Number;
    private quantItems: Number;
    public loadFoodItems: Food[];
    public loadDrinkItems: Drink[];
    constructor(_name: String, _hands: Number, _quantItems: Number,
        _loadFoodItems?: Food[], _loadDrinkItems?: Drink[]) {
        this.name = _name;
        this.hands = _hands;
        this.quantItems = _quantItems;
        this.loadFoodItems = _loadFoodItems;
        this.loadDrinkItems = _loadDrinkItems;
    }

    howManyItems(type: any): Number {
        return type.length; // return this.loadItems.length;
    }
    isFreeSpace(waiter: Waiter): Boolean {
        let res: Boolean = false;
        if (Number(this.howManyItems(this.loadDrinkItems)) 
        + Number(this.howManyItems(this.loadDrinkItems)) < Number(this.quantItems) * Number(this.hands)) {
            res = true;
        }
        return res;
    }
    serveItem(type: String) {
        if (type === 'drink') {
            this.loadDrinkItems.shift();
        } else if (type === 'food') {
            this.loadFoodItems.shift();
        }
    }
    loadItem(type: String, data: any) {
        if (type === 'drink') {
            this.loadDrinkItems.push(data);
        } else if (type === 'food') {
            this.loadFoodItems.push(data);
        }
    }
}
