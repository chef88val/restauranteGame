import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from 'src/app/components/board/board.component';
import { PlayerComponent } from 'src/app/components/player/player.component';
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
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CountdownModule } from 'ngx-countdown';
import { CounterModule } from 'ngx-counter';
describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let apiDataService: ApiDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CountdownModule, CounterModule, CookieModule.forRoot(), RouterTestingModule],
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
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    apiDataService = new ApiDataService();
    expect(component).toBeTruthy();
  });
});
