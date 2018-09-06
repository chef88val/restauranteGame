import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './components/game/game.component';
import { PlayerComponent } from './components/player/player.component';
import { BoardComponent } from './components/board/board.component';
import { DrinkComponent } from './components/drink/drink.component';
import { FoodComponent } from './components/food/food.component';
import { ColorComponent } from './components/color/color.component';
import { LevelComponent } from './components/level/level.component';
import { ResumComponent } from './components/resum/resum.component';
import { TableComponent } from './components/table/table.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { FormsModule } from '@angular/forms';
import { ApiDataService } from './services/api-data.service';
import { CookieService, CookieOptionsProvider, CookieModule } from 'ngx-cookie';
import { AlertComponent } from './components/alert/alert.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule , CookieModule.forRoot(), RouterTestingModule],
      providers: [ ApiDataService, CookieService, CookieOptionsProvider],
      declarations: [
        AppComponent,
        MainComponent,
        GameComponent,
        PlayerComponent,
        BoardComponent,
        DrinkComponent,
        FoodComponent,
        ColorComponent,
        LevelComponent,
        ResumComponent,
        TableComponent,
        WaiterComponent,
        AlertComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Debug');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Debug');
  }));
});
