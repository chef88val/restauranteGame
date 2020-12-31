import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PlayerComponent } from 'src/app/components/player/player.component';
import { BoardComponent } from 'src/app/components/board/board.component';
import { DrinkComponent } from 'src/app/components/drink/drink.component';
import { FoodComponent } from 'src/app/components/food/food.component';
import { ColorComponent } from 'src/app/components/color/color.component';
import { LevelComponent } from 'src/app/components/level/level.component';
import { ResumComponent } from 'src/app/components/resum/resum.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { WaiterComponent } from 'src/app/components/waiter/waiter.component';
import { FormsModule } from '@angular/forms';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CookieService, CookieOptionsProvider, CookieModule } from 'ngx-cookie';
import { Player } from 'src/app/class/player';
import { not } from '@angular/compiler/src/output/output_ast';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CountdownModule } from 'ngx-countdown';
import { CounterModule } from 'ngx-counter';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,  CountdownModule, CounterModule, CookieModule.forRoot(), RouterTestingModule],
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
    const emit: String = '';
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
