import { Injectable } from '@angular/core';
import { Level } from './class/level';
import { Food } from './class/food';
import { Drink } from './class/drink';
import { Waiter } from './class/waiter';
import { Table } from './class/table';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private listLevels: any[];
  constructor() { }


  getLevels(): Level[] { return this.listLevels; }
  getLevel(lvl: Number): Level { return this.listLevels.find(l => l.lvl === lvl); }
  buildLevels(): any {
    const levels: Level[] = [];
    this.listLevels = [];
    for (let i = 0; i < 6; i++) {
      if (i > 4) {
        this.listLevels.push(
          new Level(i * 30, i, 1,
            [new Food(`F${i * 0 + 1}`, 1, Math.round(i / 2))],
            [new Drink(`D${i * 0 + 1}`, 1, Math.round(i / 2))],
            [new Waiter(`Waiter${i * 0 + 1}`, 2, 3, [], [])],
            [new Table(`T${i * 0 + 1}`, 1), new Table(`T${i * 0 + 2}`, 2), new Table(`T${i * 0 + 3}`, 3)]
          ));
      } else if (i === 4) {
        this.listLevels.push(
          new Level(i * 30, i, 1,
            [new Food(`F${i * 0 + 1}`, 1, Math.round(i / 2)), new Food(`F${i * 0 + 1}`, 1, Math.round(i / 2))],
            [new Drink(`D${i * 0 + 1}`, 1, Math.round(i / 2)), new Drink(`D${i * 0 + 1}`, 1, Math.round(i / 2))],
            [new Waiter(`Waiter${i * 0 + 1}`, 2, 3, [], [])],
            [new Table(`T${i * 0 + 1}`, 1), new Table(`T${i * 0 + 2}`, 2), new Table(`T${i * 0 + 3}`, 3)]
          ));
      } else {
        this.listLevels.push(
          new Level(i * 30, i, 1,
            [new Food(`F${i}`, 1, 1)],
            [new Drink(`D${i}`, 1, 1)],
            [new Waiter(`Waiter${i}`, 1, 1, [], [])],
            [new Table(`T${i}`, 1)]
          ));
      }
    }
    // return levels;
  }
}
