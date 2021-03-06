import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { PlayerComponent } from '../player/player.component';
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
import { AlertComponent } from '../alert/alert.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CountdownModule } from 'ngx-countdown';
import { CounterModule } from 'ngx-counter';
describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule , CountdownModule, CounterModule, CookieModule.forRoot(), RouterTestingModule],
      providers: [ ApiDataService, CookieService, CookieOptionsProvider],
      declarations: [GameComponent,
        PlayerComponent,
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
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
