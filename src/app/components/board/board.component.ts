import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange, ViewChild } from '@angular/core';
import { Level } from '../../class/level';
import { ApiDataService } from '../../services/api-data.service';
import { Waiter, LoadItemWaiter } from '../../class/waiter';
import { CountdownComponent } from 'ngx-countdown';
import { T } from '@angular/core/src/render3';
import { AlertsService } from '../../services/alerts.service';
import { Alert, AlertType } from '../../class/alert';
import { Cooker } from '../../class/cooker';
import { Guest } from '../../class/guest';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() level: Number;
  @Output() sendLevelMain: EventEmitter<any> = new EventEmitter();
  @ViewChild(CountdownComponent) counter: CountdownComponent;
  // @Output() sendPlayerMain: EventEmitter<any> = new EventEmitter();
  private levelSelected: Level = null;
  private waiters: Waiter[] = [];
  private waiterSelected: any = 0;
  private cookers: Cooker[] = [];
  private cookerSelected: any = 0;
  private isBill: Boolean = false;
  private isBillSend: Boolean = false;
  private isFreeSpace: Boolean = false;
  public configCountDown: any = {};
  constructor(private apiData: ApiDataService, private alertService: AlertsService) { }
  changeLeftime() {
    this.configCountDown = { leftTime: this.configCountDown.leftTime - 200 };
    console.log(this.configCountDown);
  }
  ngOnInit() {
    // this.alertService.info('INIT');
    // this.sendLevelMain.emit('Completed');
    // this.sendPlayerMain.emit('Completed');
    console.log('levelInput', this.apiData.getLevel(this.level));
    this.levelSelected = this.apiData.getLevel(this.level);
    this.waiters = this.levelSelected.waiters;
    this.cookers = this.levelSelected.cookers;
    this.configCountDown = { leftTime: this.levelSelected.time, demand: true };
    this.selectWaiter(1);
  }

  ngOnChanges(changes: SimpleChanges) {
    const _lvlChanged: SimpleChange = changes.level;
    console.log('prev value: ', _lvlChanged.previousValue);
    console.log('got name: ', _lvlChanged.currentValue);
    this.level = _lvlChanged.currentValue;
    this.levelSelected = this.apiData.getLevel(this.level);
  }
  serveItem(waiter: Number, type: String, table: String) {

    this.waiterSelected.serveItem(type);
    this.checkIsBill(table);
    this.checktIsFreeSpace();
  }

  checkIsFreeTable(): Boolean {
    return this.levelSelected.tables.filter(t => t.status === 'free').length > 0;
  }
  checkIsLoadTable(): Boolean {
    return this.levelSelected.tables.filter(t => t.status !== 'free').length > 0;
  }

  getLoadGuest(): Guest {
    return this.levelSelected.guests[
      this.levelSelected.guests.lastIndexOf(
        this.levelSelected.guests.find(g => g.status === 'full')
      )];
  }

  /*checkIsLoadGuestOld(): Boolean {
    let x: Guest[] = this.levelSelected.guests[
      this.levelSelected.guests.lastIndexOf(
        this.levelSelected.guests.find(g => g.status === 'full')
      )];
    return x.length > 1;
  }*/
  checkIsLoadGuest(): Boolean {
    return this.levelSelected.guests.filter(g => g.status === 'full').length > 0;
  }

  checkIsFreeGuest(): Boolean {
    return this.levelSelected.guests.filter(t => t.status === 'free').length > 0;
  }

  changeStatusLoadGuest(newStatus: String) {
    this.levelSelected.guests[
      this.levelSelected.guests.lastIndexOf(
        this.levelSelected.guests.find(g => g.status === 'full')
      )].changeStatus(newStatus);

  }
  loadTable() {
    console.log(this.levelSelected.tables.filter(t => t.status === 'free'));
    const nTablesFree = this.levelSelected.tables.filter(t => t.status === 'free');
    if (nTablesFree.length > 0) {
      // this.configCountDown = { leftTime: this.levelSelected.time}
      this.counter.resume();
      nTablesFree.shift().changeStatus('full');
      setTimeout(() => { this.loadGuest(); }, 1000);
    }
  }


  loadGuest() {
    this.loadTable();
    console.log(this.levelSelected.guests.filter(t => t.status === 'free'));
    const nGuestsFree = this.levelSelected.guests.filter(t => t.status === 'free');
    if (nGuestsFree.length > 0) {
      nGuestsFree.shift().changeStatus('full');
    }
  }

  checktIsFreeSpace(): Boolean {
    if (this.waiterSelected.isFreeSpace(this.waiterSelected)) {
      this.isFreeSpace = false;
      return true;
    } else {
      this.alertService.warn('Waiter has not more space');
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
        this.waiterSelected.loadItem(type, new LoadItemWaiter(table, first));
      }
    }
    console.log(this.levelSelected.drinks.length);
    this.checktIsFreeSpace();
  }

  checkIsBill(table: String) {
    if (this.levelSelected.drinks.length === 0 && this.levelSelected.foods.length === 0) {
      if (this.waiterSelected.loadDrinkItems.length === 0 && this.waiterSelected.loadFoodItems.length === 0) {
        this.levelSelected.tables.find(t => t.name === table).changeStatus('served');
      }
    }
  }

  sendBill(table: String) {
    this.levelSelected.tables.find(t => t.name === table).changeStatus('billSended');
    this.waiterSelected.setDataAux('bills');
    this.alertService.success('Waiter has been <b>send</b> the bill');
  }

  closeTable(table: String) {
    if (!this.checkIsFreeGuest()) {
      console.log('0closed');
      this.levelSelected.tables.find(t => t.name === table).changeStatus('closed');
      this.sendLevelMain.emit('Completed');
    } else {
      this.levelSelected.tables.find(t => t.name === table).changeStatus('free');
      console.log(this.getLoadGuest());
      if (this.checkIsLoadGuest()) { this.getLoadGuest().changeStatus('served'); }
      this.waiterSelected.setDataAux('nTables');
      this.alertService.success('Waiter has been <b>close</b> the bill');
      setTimeout(() => { this.loadGuest(); }, 2100);
      // this.sendPlayerMain.emit('Completed');
    }
  }

  selectWaiter(i: any) {
    if (this.waiters.length > i) {
      this.waiterSelected = this.waiters[i];
    } else {
      this.waiterSelected = this.waiters[0];
    }
    /*console.log(this.waiterSelected);
    this.waiterSelected = this.waiters.find((w, index) =>{ console.log(index===i); return index === i;}  );
    console.log(this.waiterSelected);
    this.waiterSelected = this.waiters.forEach((w, index) => index === i  );
    console.log(this.waiterSelected);*/
  }
  selectCooker(i: any) {
    // this.cookerSelected = i;
    if (this.waiters.length > i) {
      this.cookerSelected = this.waiters[i];
    } else {
      this.cookerSelected = this.waiters[0];
    }
    console.log(this.cookerSelected);
  }

  onFinished() {
    console.log('finished');
    this.alertService.alert(new Alert({ message: 'End game', type: AlertType.Error }));
    // this.sendLevelMain.emit('endGame');
  }
  onNotify(evt: EventEmitter<any>) {
    console.log(evt);
  }

  onStart() {

    console.log(this.configCountDown);
  }
}
