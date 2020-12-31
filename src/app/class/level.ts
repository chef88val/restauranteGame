import { Food } from './food';
import { Drink } from './drink';
import { Waiter } from './waiter';
import { Table } from './table';
import { Injectable } from '@angular/core';
import { Guest } from './guest';
import { Cooker } from './cooker';
import { Kitchen } from 'src/app/class/kitchen';

export class Level {

    public time: Number;
    public lvl: Number;
    public speed: Number;
    public foods: Food[];
    public drinks: Drink[];
    public waiters: Waiter[];
    public tables: Table[];
    public guests: Guest[];
    public kitchen: Kitchen[];
    public cookers: Cooker[];
    constructor(_time: Number, _lvl: Number, _speed: Number,
        _foods: Food[], _drinks: Drink[], _waiters: Waiter[], _tables: Table[], 
        _kitchen: Kitchen[], _guests: Guest[], _cookers: Cooker[]
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
    checkIsFreeGuestLength(): Number {
        return this.guests.filter(t => t.status === 'free').length;
    }
    checkIsLoadGuest(): Boolean {
        return this.guests.filter(g => g.status === 'full').length > 0;
    }

    checkIsFreeGuest(): Boolean {
        return this.guests.filter(t => t.status === 'free').length > 0;
    }
    checkIsFreeTable(): Boolean {
        return this.tables.filter(t => t.status === 'free').length > 0;
    }
    checkIsFreeTableLength(): Number {
        return this.tables.filter(t => t.status === 'free').length;
    }
    checkIsLoadTable(): Boolean {
        return this.tables.filter(t => t.status !== 'free').length > 0;
    }
}
