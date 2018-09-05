import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
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
    BoardComponent
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
