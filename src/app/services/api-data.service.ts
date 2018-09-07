import { Injectable } from '@angular/core';
import { Level } from '../class/level';
import { Food } from '../class/food';
import { Drink } from '../class/drink';
import { Waiter } from '../class/waiter';
import { Table } from '../class/table';
import { Cooker } from '../class/cooker';
import { Kitchen } from '../class/kitchen';
import { Guest } from '../class/guest';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private listLevels: any[] = [];
  private nLevels: Number = 1;
  constructor() { }

  getNLevels(): Number { return this.nLevels; }
  getLevels(): Level[] { return this.listLevels; }
  getLevel(lvl: Number): Level {
    if (this.listLevels.length > 0) {
      return this.listLevels.find(l => l.lvl === lvl);
    } else {
      return new Level(0, 0, 0, [], [], [], [], null, [], []);
    }
  }

  generateItem(type: String, n: Number, opt: any): any[] {
    const res: any[] = [];
    if (type === 'Food') {
      for (let i = 1; i <= n; i++) {
        n > 4 ? res.push(new Food(`F${i}`, opt.price || 1, opt.x || 1))
          :
          n < 4 ? res.push(new Food(`F${i}`, opt.price || 1, opt.x || 1))
            : res.push(new Food(`F${i}`, opt.price || 1, opt.x || 1));
      }
    } else if (type === 'Drink') {
      for (let i = 1; i <= n; i++) {
        res.push(new Drink(`D${i}`, opt.price || 1, opt.x || 1));
      }
    } else if (type === 'Waiter') {
      for (let i = 1; i <= n; i++) {
        res.push(new Waiter(`Waiter${i}`, opt.hands, opt.quantItems, [], []));
      }
    } else if (type === 'Table') {
      for (let i = 1; i <= n; i++) {
        res.push(new Table(`T${i}`, opt.pax || 1));
      }
    } else if (type === 'Cooker') {
      for (let i = 1; i <= n; i++) {
        res.push(new Cooker(`Cooker${i}`, opt.hands, opt.quantItems, [], []));
      }
    } else if (type === 'Kitchen') {
      for (let i = 1; i <= n; i++) {
        res.push(new Kitchen(`Kitchen${i}`, opt.nCookers || 1, []));
      }
    } else if (type === 'Guest') {
      for (let i = 1; i <= n; i++) {
        res.push(new Guest(`Guest${i}`, 0, false, 'free'));
      }
    }
    return res;
  }
  buildLevels(): any {
    const levels: Level[] = [];
    this.listLevels = [];
    for (let i = 0; i < this.nLevels; i++) {
     /* if (i > 4) {
        this.listLevels.push(
          new Level(i * 30, i, 1,
            [new Food(`F${i}`, 1, Math.round(i / 2))],
            [new Drink(`D${i}`, 1, Math.round(i / 2))],
            [new Waiter(`Waiter${i}`, 2, 3, [], [])],
            [new Table(`T${i}`, 1), new Table(`T${i * 0 + 2}`, 2), new Table(`T${i * 0 + 3}`, 3)]
          ));
      } else if (i === 4) {
        this.listLevels.push(
          new Level(i * 30, i, 1,
            [new Food(`F${i}`, 1, Math.round(i / 2)), new Food(`F${i}`, 1, Math.round(i / 2))],
            [new Drink(`D${i}`, 1, Math.round(i / 2)), new Drink(`D${i}`, 1, Math.round(i / 2))],
            [new Waiter(`Waiter${i}`, 2, 3, [], [])],
            [new Table(`T${i}`, 1), new Table(`T${i * 0 + 2}`, 2), new Table(`T${i * 0 + 3}`, 3)]
          ));
      } else {*/
        this.listLevels.push(
          new Level(5, i, 1,
            this.generateItem('Food', 1, {}),
            // [new Food(`F${i}`, 1, 1)],
            this.generateItem('Drink', 1, {}),
            this.generateItem('Waiter', 1, { hands: 1, quantItems: 1 }),
            this.generateItem('Table', 1, { pax: 3 }),
            new Kitchen(`Kitchen${i}`, 1, []),
            this.generateItem('Guest', 4, {}),
            this.generateItem('Cooker', 1, { hands: 1, quantItems: 1 }),
          ));
     // }
    }
    // return levels;
  }
}
