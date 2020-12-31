import { Injectable } from '@angular/core';
import {
  Cooker,
  Drink,
  Food,
  Game,
  Guest,
  Kitchen,
  Level,
  Player,
  Restaurant,
  Table,
  Waiter
} from '../class';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private currentGame: Game = null;
  private player: Player = null;
  private listLevels: any[] = [];
  private nLevels: Number = 1;
  private listRestaurants: any[] = [];
  private nRestaurants: Number = 1;
  constructor(private cookieService: CookieService) { }



  getNLevels(): Number { return this.nLevels; }
  getLevels(): Level[] { return this.listLevels; }
  getLevel(lvl: Number): any {
    if (this.listLevels.length > 0 || this.listLevels!=null) {
      return this.listLevels;
      //return this.listLevels.find(l => l.lvl === lvl);
    } else {
      return new Level(0, 0, 0, [], [], [], [], null, [], []);
    }
  }
  getNRestaurants(): Number { return this.nRestaurants; }
  getRestaurants(): Restaurant[] { return this.listRestaurants; }
  getRestaurant(rst: any): Restaurant {
    if (this.listRestaurants.length > 0) {
      // return this.listRestaurants.find(l => l.rst === rst);
      return this.listRestaurants[rst];
    } else {
      return new Restaurant('Restaurant1', new Date(), 'menu', 10, true, [], 1);
    }
  }

  getDataLevel(lvl: Number, config: any): any {
    let value2Return: any[] = [];
    let lvl2Road = config.levels[String(lvl)];
    console.log(lvl2Road);
    for (let key in lvl2Road) {
      console.log(key)
      console.log(lvl2Road[key])
      if (key === 'nWaiters')
        value2Return.push(this.generateItem('Waiter', lvl2Road[key], {}))
      if (key === 'nCookers')
        value2Return.push(this.generateItem('Cooker', lvl2Road[key], {}))
      if (key === 'nFood')
        value2Return.push(this.generateItem('Food', lvl2Road[key], {}))
      if (key === 'nDrinks')
        value2Return.push(this.generateItem('Drink', lvl2Road[key], {}))

      if (key === 'nTables')
        value2Return.push(this.generateItem('Table', lvl2Road[key], {}))
      if (key === 'nKitchens')
        value2Return.push(this.generateItem('Kitchen', lvl2Road[key], {}))
      if (key === 'nGuests')
        value2Return.push(this.generateItem('Guest', lvl2Road[key], {}))

    }
    //this.listLevels.push(Object.assign(config,value2Return));
    this.listLevels = config.levels[String(lvl)];
    this.listLevels['data']=value2Return;
    return value2Return;

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
  buildNextLevel(_lvl: String): any {

  }
  buildLevels(): any {
    const levels: Level[] = [];
    this.listLevels = [];
    this.listRestaurants = [];
    //this.listRestaurants.push(new Restaurant('Restaurant1', new Date(), 'menu', 10, true, []));
    //this.listRestaurants.push(new Restaurant('Restaurant2', new Date(), 'special', 20, true, []));
    //this.listRestaurants.push(new Restaurant('Restaurant3', new Date(), 'normal', 30, true, []));
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
          [new Kitchen(`Kitchen${i}`, 1, [])],
          this.generateItem('Guest', 4, {}),
          this.generateItem('Cooker', 1, { hands: 1, quantItems: 1 }),
        ));
      // }
    }
    // return levels;
  }
}
