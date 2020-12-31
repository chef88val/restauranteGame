import { Injectable } from "@angular/core";

export class WorkerAux {
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


export class LoadItemCooker {
    private table: String;
    private item: any;
    constructor(_table: String, _item: any) {
        this.table = _table;
        this.item = _item;
    }
}

@Injectable()
export class Worker {
    private _name: String;
    private _status: String;
    private _hands: Number;
    private _tips: Number;
    private _quantItems: Number;
    private _loadItems: any[];
    public auxData: any;
    private _auxWorkerData: WorkerAux;
    private _tag: String;

    constructor(_tag: String, _name: String, _hands: Number, 
        _quantItems: Number, _loadItems?: any[],  _tips?: Number,
        _auxData?: any) {
        this._tag = _tag;
        this._name = _name;
        this._hands = _hands;
        this._quantItems = _quantItems;
        this._status = 'Active';
        this._auxWorkerData = new WorkerAux();
        this.tips = _tips || 0;
        this._loadItems = [];
    }


    public set auxWorkerData(v: WorkerAux) {
        this._auxWorkerData = v;
    }

    public get auxWorkerData(): WorkerAux {
        return this._auxWorkerData;
    }
    public set tag(v: String) {
        this._tag = v;
    }

    public get tag(): String {
        return this._tag;
    }
    public set name(v: String) {
        this._name = v;
    }

    public get name(): String {
        return this._name;
    }


    public set hands(v: Number) {
        this._hands = v;
    }

    public get hands(): Number {
        return this._hands;
    }
    public set tips(v: Number) {
        this._tips = v;
    }

    public get tips(): Number {
        return this._tips;
    }


    public set quantItems(v: Number) {
        this._quantItems = v;
    }

    public get quantItems(): Number {
        return this._quantItems;
    }


    public set loadItems(v: any[]) {
        this._loadItems = v;
    }

    public get loadItems(): any[] {
        return this._loadItems;
    }

    changeStatus(newStatus: String) {
        this._status = newStatus;
    }

    howManyItems(type: any): Number {
        return type.length; // return this.loadItems.length;
    }
    isFreeSpace(): Boolean {
        let res: Boolean = false;
        if (this._loadItems.length < Number(this.quantItems) * Number(this.hands)) {
            res = true;
        }
        return res;
    }
    serveItem(type: String) {
        if (type === 'drink') {
            this._loadItems.shift();
            this.setDataAux('nDrinks');
        } else if (type === 'food') {
            this._loadItems.shift();
            this.setDataAux('nFoods');
        }
        this.setDataAux('total');
    }
    loadItem(type: String, data: any) {
        if (type === 'drink') {
            this._loadItems.push(data);
            this.setDataAux('travels');
        } else if (type === 'food') {
            this._loadItems.push(data);
            this.setDataAux('travels');
        }
    }
    setDataAux(prop: String) {
        this.auxData[prop.valueOf()] += Number(1);
    }

}
