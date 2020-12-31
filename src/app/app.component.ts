import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { GameService } from './game.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player, Restaurant, Game } from './class';
import * as _data from '../assets/fileConfig.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isplayer: Boolean = false;
  title = 'Plataforma de juego';
  game: Game;
  dataGameSelected: any = {};
  newGame: Game = null;
  player: Player = null;
  gameList: Game[] = [];
  games: any = (_data as any).default;
  public cdRef: ChangeDetectorRef; name = 'Peter';
  constructor(
    private cookieService: CookieService, private router: Router,
    private gameService: GameService, private cd: ChangeDetectorRef) {
    this.cdRef = cd;

  }

  updateName() {
    let x = Math.random() * 10;
    this.name = 'John' + x;
  }

  createPlayer() {
    if (!this.player) {
      console.log('createPlayer')
      this.player = new Player('yo', 0, false, 'online');
    } else {
      console.log('2createPlayer')
      let x = Math.random() * 10;
      //this.player.updateNamePlayer('a' + x)
      console.log(this.player)
    }
    this.refresh();
  }

  ngOnInit(): void {
    //this.game = new Game('x','yy',"../assets/sushiGame.fileConfig.json");
    //this.player = new Player('yo',1,false, 'online');
    this.player = this.cookieService.getObject('player') as Player;
    //this.player = new Player('yo',1,false, 'online');
    if (this.cookieService.getObject('game')) {
      console.log(this.cookieService.getObject('game'));
      let _game = this.cookieService.getObject('game');
      this.getDataJSON(_game);
    } else {
      console.log(this.player)

      this.gameList = this.games.data;
      if (this.gameList.length == 1) {
        this.loadGame(0, 'Pre-Charged');
      }

    }
  }
  /* getJSON(_jsonURL: any): Observable<any> {
     return this.httpClient.get(_jsonURL).map((response: any) => response.json())
       .catch((error: any) => console.log(error));;
   }*/


  refresh() {

    if (this.game.status == 'Charged') {
      this.gameService.setCurrentGame(this.game);


    }

    if (this.game.status == 'Charged' && this.player) {
      this.cookieService.putObject('player', this.player)

      this.gameService.setCurrentPlayer(this.player);
      this.isplayer = true;
      this.router.navigate(['/game', {}]);
    }

  }

  updateGame(_index: Number, newStatus: String) {
    this.gameList[String(_index)].status = newStatus;
    console.log()
  }

  loadGame(_index: Number, newStatus: String) {
    let index = String(_index)
    //this.cdRef.detectChanges();
    //this.loadGame(0);
    this.game = new Game(
      this.gameList[index].name,
      this.gameList[index].image,
      this.gameList[index].fileConfig
    );
    this.cookieService.putObject('game', this.game)
    this.getDataJSON();
  }
  async getDataJSON(_game?: Object) {
    let configFile = null;
    if (this.game)
      configFile = this.game.fileConfig
      else 
      configFile =_game['_fileConfig']
    await this.gameService.getJSONDATA(configFile).toPromise().then((data) => {
      console.log("Promise resolved with: " + JSON.stringify(data));
      console.log("Promise resolved with: " + data);
      //Object.assign(this.game.config ,data);
      //this.dataGameSelected = data;
      if(!this.game){
        this.game = new Game(
          _game['_name'],
          _game['_image'],
          _game['_fileConfig']
        );
      }
      this.game.config = data;
      this.game._configAsValue = data;
      //this.game.restaurants.push(new Restaurant('A', new Date(), 'menu', 10, true, [], data.numberxLvl[0]))
      this.game.restaurants = this.gameService.setNRestaurantsGame(data)
      console.log(this.game);
      this.game.status = 'Charged'
      console.log(this.game.config);
      this.gameService.setCurrentGame(this.game);
      this.refresh();
      //Object.assign(this.game.config,  data);

    })


  }
  /*
    loadGame(_index: Number) {
      let index = String(_index)
      //this.cdRef.detectChanges();
      //this.loadGame(0);
      this.game = new Game(
        this.gameList[index].name,
        this.gameList[index].image,
        this.gameList[index].fileConfig
      );
      this.gameService.getJSONDATA(this.game.fileConfig).toPromise().then((data) => {
        console.log("Promise resolved with: " + JSON.stringify(data));
        console.log("Promise resolved with: " + data);
        //Object.assign(this.game.config ,data);
        //this.dataGameSelected = data;
        this.game.config = data;
        this.game.restaurants.push(new Restaurant('A', new Date(), 'menu', 10, true, [], data.numberxLvl[0]))
        this.game.restaurants = this.gameService.setNRestaurantsGame(data)
        console.log(this.game);
        this.game.changeStatus('Charged')
        console.log(this.game);
        this.refresh();
        //Object.assign(this.game.config,  data);
  
      })
  
    }
  */




}
