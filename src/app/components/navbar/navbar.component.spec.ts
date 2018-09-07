import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AlertsService } from '../../services/alerts.service';
import { CookieService, CookieModule, CookieOptionsProvider } from 'ngx-cookie';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { CounterModule } from 'ngx-counter';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiDataService } from '../../services/api-data.service';
import { MainComponent } from '../../main/main.component';
import { GameComponent } from '../game/game.component';
import { PlayerComponent } from '../player/player.component';
import { BoardComponent } from '../board/board.component';
import { DrinkComponent } from '../drink/drink.component';
import { FoodComponent } from '../food/food.component';
import { ColorComponent } from '../color/color.component';
import { LevelComponent } from '../level/level.component';
import { ResumComponent } from '../resum/resum.component';
import { TableComponent } from '../table/table.component';
import { WaiterComponent } from '../waiter/waiter.component';
import { AlertComponent } from '../alert/alert.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CountdownModule, CounterModule, CookieModule.forRoot(), RouterTestingModule],
      providers: [ApiDataService, CookieService, CookieOptionsProvider],
      declarations: [MainComponent, GameComponent,
        PlayerComponent,
        BoardComponent,
        DrinkComponent,
        FoodComponent,
        ColorComponent,
        LevelComponent,
        ResumComponent,
        TableComponent,
        WaiterComponent,
        AlertComponent,
      FooterComponent, NavbarComponent, LoginComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});