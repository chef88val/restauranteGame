import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from 'src/app/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { CounterModule } from 'ngx-counter';
import { CookieModule, CookieService, CookieOptionsProvider } from 'ngx-cookie';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiDataService } from 'src/app/services/api-data.service';
import { MainComponent } from 'src/app/main/main.component';
import { GameComponent } from 'src/app/components/game/game.component';
import { PlayerComponent } from 'src/app/components/player/player.component';
import { BoardComponent } from 'src/app/components/board/board.component';
import { DrinkComponent } from 'src/app/components/drink/drink.component';
import { FoodComponent } from 'src/app/components/food/food.component';
import { ColorComponent } from 'src/app/components/color/color.component';
import { LevelComponent } from 'src/app/components/level/level.component';
import { ResumComponent } from 'src/app/components/resum/resum.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { WaiterComponent } from 'src/app/components/waiter/waiter.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule , CountdownModule, CounterModule, CookieModule.forRoot(), RouterTestingModule],
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
        AlertComponent,
      FooterComponent, NavbarComponent, LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
