import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Level } from '../../class/level';
import { ApiDataService } from '../../services/api-data.service';
import { Waiter, LoadItemWaiter } from '../../class/waiter';
import { CountdownComponent } from 'ngx-countdown';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() level: Number;
  @Output() sendLevelMain: EventEmitter<any> = new EventEmitter();
  // @Output() sendPlayerMain: EventEmitter<any> = new EventEmitter();
  private levelSelected: Level = null;
  private waiter: Waiter[] = [];
  private waiterSelected: any = 0;
  private isBill: Boolean = false;
  private isBillSend: Boolean = false;
  private isFreeSpace: Boolean = false;
  public configCountDown: any ={};
  constructor(private apiData: ApiDataService) { }
  changeLeftime() { 
    this.configCountDown = {leftTime: this.configCountDown.leftTime-200};
    console.log(this.configCountDown); 
   }
  ngOnInit() {
    this.configCountDown = { leftTime: 3000 };
    // this.sendLevelMain.emit('Completed');
    // this.sendPlayerMain.emit('Completed');
    console.log('levelInput', this.apiData.getLevel(this.level));
    this.levelSelected = this.apiData.getLevel(this.level);
    this.waiter = this.levelSelected.waiter;
  }

  ngOnChanges(changes: SimpleChanges) {
    const _lvlChanged: SimpleChange = changes.level;
    console.log('prev value: ', _lvlChanged.previousValue);
    console.log('got name: ', _lvlChanged.currentValue);
    this.level = _lvlChanged.currentValue;
    this.levelSelected = this.apiData.getLevel(this.level);
  }
  serveItem(waiter: Number, type: String, table: String) {

    this.waiter[this.waiterSelected].serveItem(type);
    this.checkIsBill(table);
    this.checktIsFreeSpace();
  }
  checktIsFreeSpace(): Boolean {
    if (this.waiter[this.waiterSelected].isFreeSpace(this.waiter[this.waiterSelected])) {
      this.isFreeSpace = false;
      return true;
    } else {
      this.isFreeSpace = true;
      return false;
    }
  }
  loadItem(waiter: Number, type: String, table: String) {
    let first: any = null;
    if (this.checktIsFreeSpace()) {
      if (type === 'drink' && this.levelSelected.drinks.length > 0) {
        first = this.levelSelected.drinks[0];
        this.levelSelected.drinks.shift();
      } else if (type === 'food' && this.levelSelected.foods.length > 0) {
        first = this.levelSelected.foods[0];
        this.levelSelected.foods.shift();
      }
      if (first != null) {
        this.waiter[this.waiterSelected].loadItem(type, new LoadItemWaiter(table, first));
      }
    }
    console.log(this.levelSelected.drinks.length);
    this.checktIsFreeSpace();
  }

  checkIsBill(table: String) {
    if (this.levelSelected.drinks.length === 0 && this.levelSelected.foods.length === 0) {
      if (this.waiter[this.waiterSelected].loadDrinkItems.length === 0 && this.waiter[this.waiterSelected].loadFoodItems.length === 0) {
        this.levelSelected.tables.find(t => t.name === table).changeStatus('served');
      }
    }
  }

  sendBill(table: String) {
    this.levelSelected.tables.find(t => t.name === table).changeStatus('billSended');
    this.waiter[this.waiterSelected].setDataAux('bills');
  }
  closeTable(table: String) {
    this.levelSelected.tables.find(t => t.name === table).changeStatus('closed');
    this.sendLevelMain.emit('Completed');
    this.waiter[this.waiterSelected].setDataAux('nTables');
    // this.sendPlayerMain.emit('Completed');
  }

  selectWaiter(i: Number) {
    this.waiterSelected = i;
  }
}
