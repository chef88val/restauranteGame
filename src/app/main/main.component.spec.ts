import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { GameComponent } from '../components/game/game.component';
import { PlayerComponent } from '../components/player/player.component';
import { BoardComponent } from '../components/board/board.component';
import { DrinkComponent } from '../components/drink/drink.component';
import { FoodComponent } from '../components/food/food.component';
import { ColorComponent } from '../components/color/color.component';
import { LevelComponent } from '../components/level/level.component';
import { ResumComponent } from '../components/resum/resum.component';
import { TableComponent } from '../components/table/table.component';
import { WaiterComponent } from '../components/waiter/waiter.component';
import { FormsModule } from '@angular/forms';
import { ApiDataService } from '../services/api-data.service';
import { CookieService, CookieOptionsProvider, CookieModule } from 'ngx-cookie';
import { AlertComponent } from '../components/alert/alert.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule , CookieModule.forRoot(), RouterTestingModule],
      providers: [ ApiDataService, CookieService, CookieOptionsProvider],
      declarations: [ MainComponent, GameComponent,
        PlayerComponent,
        BoardComponent,
        DrinkComponent,
        FoodComponent,
        ColorComponent,
        LevelComponent,
        ResumComponent,
        TableComponent,
        WaiterComponent,
        AlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
