import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { Game, Player, Restaurant } from './class';
import { ApiDataService } from './services/api-data.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentPlayer: Player = null;
  currentGame: Game;
  gameList: Game[] = [];

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private apiData: ApiDataService) {

  }

  initService() {
  }
  setCurrentGame(_game: Game) {
    this.currentGame = _game;
  }
  setCurrentPlayer(_player: Player) {
    this.currentPlayer = _player;
  }
  getListGames(): Game[] {
    return this.gameList;
  }
  getCurrentGame(): Game {
    return this.currentGame;
  }
  getCurrentPlayer(): Player {
    return this.currentPlayer;
  }
  getJSONDATA(_fileConfig: string): Observable<any> {
    let _data = null
    return this.httpClient.get<any>(_fileConfig);/* .subscribe(data => {
      this.game.config = data;
      console.log(this.game)
    }) */

  }
  getCurrentRestaurant(){

  }
  setNRestaurantsGame(data: any): Restaurant[]{
    let value2Return: Restaurant[] = [];
    let totalLvl = data.totalLevels;
    let numberxLvl = data.numberxLvl;
    let i = totalLvl;
    let cont = 0;
    let cont2 = 0;
    let uu =0;
    for(let u= 0; uu<= totalLvl && u<numberxLvl.length ; u++){
      uu = totalLvl-numberxLvl[u];
      cont2++;
      console.log('He creado '+ cont2)
      value2Return.push(new Restaurant('A', new Date(), 'menu', 10, true, [], numberxLvl[cont]));
    }
    /*while (i<=totalLvl) {
      i = totalLvl- numberxLvl[cont];
      console.log('He creado '+ cont)
      value2Return.push(new Restaurant('A', new Date(), 'menu', 10, true, [], numberxLvl[cont]));
      cont++;
    }*/
    return value2Return;
  }
 /* createGame(index: Number) {

    let _index = String(index);
    this.currentGame = new Game(
      this.gameList[0].name,
      this.gameList[0].image,
      this.gameList[0].fileConfig
    );
    //console.log(`Pick game nº ${_index}, ${this.games.data[_index].name}`)




  }
  loadGame(type: Boolean) {
    if (type) {
      this.currentPlayer = this.cookieService.getObject('player') as Player;
    } else {
      this.currentPlayer = new Player('Hello world', 'A01', false, 'online');
    }

    if (this.currentPlayer != null && this.currentGame != null) {
      if (this.currentPlayer.currentLvl <= this.currentGame.fileConfig['levels']) {
        this.apiData.buildNextLevel(this.currentPlayer.currentLvl);
      } else {
        throw new Error("El jugador tiene un nivel mas alto que el definido en el juego");


      }
    }
  }*/
}
