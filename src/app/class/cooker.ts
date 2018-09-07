import { Drink } from './drink';
import { Food } from './food';
import { Injectable } from '@angular/core';
@Injectable()

export class LoadItemCooker {
    private table: String;
    private item: any;
    constructor(_table: String, _item: any) {
        this.table = _table;
        this.item = _item;
    }
}
export class CookerAux {
    private travels: Number;
    private nFoods: Number;
    private nDrinks: Number;
    private total: Number;
    private nTables: Number;
    private bills: Number;
    constructor() {
        this.travels = 0;
        this.nFoods = 0;
        this.total = 0;
        this.nDrinks = 0;
        this.bills = 0;
        this.nTables = 0;
    }
}
export class Cooker {
    public name: String;
    private hands: Number;
    private quantItems: Number;
    public loadFoodItems: Food[];
    public loadDrinkItems: Drink[];
    public auxData: CookerAux;

    constructor(_name: String, _hands: Number, _quantItems: Number,
        _loadFoodItems?: Food[], _loadDrinkItems?: Drink[], auxData?: CookerAux) {
        this.name = _name;
        this.hands = _hands;
        this.quantItems = _quantItems;
        this.loadFoodItems = _loadFoodItems || [];
        this.loadDrinkItems = _loadDrinkItems || [];
        this.auxData = new CookerAux();
    }

    howManyItems(type: any): Number {
        return type.length; // return this.loadItems.length;
    }
    isFreeSpace(waiter: Cooker): Boolean {
        let res: Boolean = false;
        if (Number(this.howManyItems(this.loadDrinkItems))
          + Number(this.howManyItems(this.loadFoodItems)) < Number(this.quantItems) * Number(this.hands)) {
            res = true;
        }
        return res;
    }
    serveItem(type: String) {
        if (type === 'drink') {
            this.loadDrinkItems.shift();
            this.setDataAux('nDrinks');
        } else if (type === 'food') {
            this.loadFoodItems.shift();
            this.setDataAux('nFoods');
        }
        this.setDataAux('total');
    }
    loadItem(type: String, data: any) {
        if (type === 'drink') {
            this.loadDrinkItems.push(data);
            this.setDataAux('travels');
        } else if (type === 'food') {
            this.loadFoodItems.push(data);
            this.setDataAux('travels');
        }
    }
    setDataAux(prop: String) {
        this.auxData[prop.valueOf()] += Number(1);
    }
}
