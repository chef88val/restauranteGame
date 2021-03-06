import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { PlayerComponent } from '../player/player.component';
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
describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let apiDataService: ApiDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ,  CountdownModule, CounterModule,CookieModule.forRoot(), RouterTestingModule],
      providers: [ ApiDataService, CookieService, CookieOptionsProvider],
      declarations: [ PlayerComponent,
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
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    apiDataService = new ApiDataService();
    expect(component).toBeTruthy();
  });
});
