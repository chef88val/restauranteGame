import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule } from 'ngx-countdown';
import { AppComponent } from './app.component';
import { DrinkComponent } from './components/drink/drink.component';
import { TableComponent } from './components/table/table.component';
import { FoodComponent } from './components/food/food.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { PlayerComponent } from './components/player/player.component';
import { GameComponent } from './components/game/game.component';
import { LevelComponent } from './components/level/level.component';
import { MainComponent } from './main/main.component';
import { BoardComponent } from './components/board/board.component';
import { ColorComponent } from './components/color/color.component';
import { ResumComponent } from './components/resum/resum.component';
import { RouterOutlet } from '@angular/router';
import { ApiDataService } from './services/api-data.service';
import { AlertsService } from './services/alerts.service';
@NgModule({
  declarations: [
    AppComponent,
    DrinkComponent,
    DrinkComponent,
    TableComponent,
    FoodComponent,
    WaiterComponent,
    PlayerComponent,
    GameComponent,
    LevelComponent,
    MainComponent,
    BoardComponent,
    ColorComponent,
    ResumComponent
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    FormsModule,
    NgbModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    TranslateModule.forRoot(),
    CountdownModule
  ],
  providers: [RouterOutlet, ApiDataService, AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
