import { Food } from './food';
import { Drink } from './drink';
import { Waiter } from './waiter';
import { Table } from './table';
import { Injectable } from '@angular/core';
import { Guest } from './guest';
import { Cooker } from './cooker';
import { Kitchen } from './kitchen';
@Injectable()

export class Level {

    public time: Number;
    public lvl: Number;
    public speed: Number;
    public foods: Food[];
    public drinks: Drink[];
    public waiters: Waiter[];
    public tables: Table[];
    public guests: Guest[];
    public kitchen: Kitchen;
    public cookers: Cooker[];
    constructor(_time: Number, _lvl: Number, _speed: Number,
        _foods: Food[], _drinks: Drink[], _waiters: Waiter[], _tables: Table[], _kitchen: Kitchen, _guests: Guest[], _cookers: Cooker[]
    ) {
        this.time = _time;
        this.lvl = _lvl;
        this.speed = _speed;
        this.foods = _foods;
        this.drinks = _drinks;
        this.waiters = _waiters;
        this.tables = _tables;
        this.guests = _guests;
        this.kitchen = _kitchen;
        this.cookers = _cookers;
    }

    getWaiter(i: any): Waiter {
        console.log(this.waiters);
        return this.waiters[i];
      }
}
