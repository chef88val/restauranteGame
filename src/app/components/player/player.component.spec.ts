import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { BoardComponent } from '../board/board.component';
import { DrinkComponent } from '../drink/drink.component';
import { FoodComponent } from '../food/food.component';
import { ColorComponent } from '../color/color.component';
import { LevelComponent } from '../level/level.component';
import { ResumComponent } from '../resum/resum.component';
import { TableComponent } from '../table/table.component';
import { WaiterComponent } from '../waiter/waiter.component';
import { FormsModule } from '@angular/forms';
import { ApiDataService } from '../../services/api-data.service';
import { CookieService, CookieOptionsProvider, CookieModule } from 'ngx-cookie';
import { Player } from '../../class/player';
import { not } from '@angular/compiler/src/output/output_ast';
import { AlertComponent } from '../alert/alert.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CookieModule.forRoot(), RouterTestingModule],
      providers: [ApiDataService, CookieService, CookieOptionsProvider],
      declarations: [PlayerComponent,
        BoardComponent,
        DrinkComponent,
        FoodComponent,
        ColorComponent,
        LevelComponent,
        ResumComponent,
        TableComponent,
        WaiterComponent,
        AlertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.player).not.toBeUndefined();
    const p = new Player('', 0, false, '');
    expect(component.player).toEqual(p);
  });
  it('Input', () => {
    const p = new Player('', 0, false, '');
    component.player = p;
    expect(component.player).toBe(p);
  });
  it('Output', () => {
    let player: Player = new Player('test@example.com', 0, false, '');

    component.sendPlayerMain.subscribe((value) => player = value);

    expect(player.name).toBe('test@example.com');
    expect(player.currentLvl).toBe(0);
    expect(player.banned).toBe(false);
    expect(player.status).toBe('');
  });

  it('savePlayer', inject([CookieService], (cookie: CookieService) => {
    expect(component.player.status).toBeDefined();
    expect(component.player.status).toBe('');
    component.savePlayer();
    expect(component.player.status).toBe('registered');
    expect(cookie.getObject('player')).not.toBeNull();
    expect(cookie.getObject('player')).not.toBeUndefined();
    expect(component.player.status).toBe('registered');
  }));
  it('removeCookies', inject([CookieService], (cookie: CookieService) => {
    component.removeCookies();
    expect(cookie.getObject('player')).toBeUndefined();
    let emit: String = '';
    component.sendPlayerMain.subscribe((value) => {
    this.emit = value; console.log('value' + value);
      expect(emit).toBe('removeCookies');
    });
  }));
  it('resetLevel', inject([CookieService], (cookie: CookieService) => {
    component.resetLevel();
    expect(component.player.currentLvl).toBe(0);
    expect(cookie.getObject('player')).not.toBeNull();
    expect(cookie.getObject('player')).not.toBeUndefined();
    expect(component.player.currentLvl).toBe(0);
  }));

});
