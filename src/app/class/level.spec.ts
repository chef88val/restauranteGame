import { Food } from './food';
import { Drink } from './drink';
import { Waiter } from './waiter';
import { Table } from './table';
import { Injectable } from '@angular/core';
@Injectable()

export class Level {
    public time: Number;
    public lvl: Number;
    public speed: Number;
    public foods: Food[];
    public drinks: Drink[];
    public waiter: Waiter[];
    public tables: Table[];
    constructor(_time: Number, _lvl: Number, _speed: Number,
        _foods: Food[], _drinks: Drink[], _waiter: Waiter[], _tables: Table[]
    ) {
        this.time = _time;
        this.lvl = _lvl;
        this.speed = _speed;
        this.foods = _foods;
        this.drinks = _drinks;
        this.waiter = _waiter;
        this.tables = _tables;
    }
}
