import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game, Level, Restaurant } from 'src/app/class';
import { Player } from 'src/app/class/player';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CookieService } from 'ngx-cookie';
import { ColorLevel } from 'src/app/class/color';
import { GameService } from 'src/app/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() public currentPlayer: Player;
  public currentLevel: Number;
  @Input() public currentGame: Game;
  public gameStatus: Boolean = true;
  public gameStatus2: Boolean = false;
  public levelLoaded: Boolean = false;
  public restaurantLoaded: Boolean = true;
  public levels: Level[];
  public restaurants: Restaurant[];
  public color: ColorLevel;

  constructor(private _apiData: ApiDataService, private router: Router,
    private gameService: GameService, private cookieService: CookieService) { }

  async ngOnInit() {
    if (this.cookieService.getObject('game') && this.gameService.currentGame==undefined) {
      
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });;
      let _game = this.cookieService.getObject('game');
      await this.gameService.getJSONDATA(_game['_fileConfig']).toPromise().then((data) => {
        this.currentGame = new Game(
          _game['_name'],
          _game['_image'],
          _game['_fileConfig']
        );
        this.currentGame.config = data;
      })
    } else{
      this.currentGame = this.gameService.currentGame;

    }
    this.currentPlayer = this.cookieService.getObject('player') as Player;
    this.currentLevel = this.currentPlayer.currentLvl;
    console.log(this.currentPlayer)
    this.color = new ColorLevel(this._apiData.getNLevels());
    //this.levels = this._apiData.getLevels() || [];
    if (this.currentLevel != null && this.currentGame._configAsValue != null)
      this.levels = this._apiData.getDataLevel(this.currentLevel, this.currentGame._configAsValue);
    this.restaurants = [];//this.currentGame.restaurants;
    /* this.currentGame = new Game(this.currentPlayer,
       new Restaurant(null, new Date(), 'menu', 10, true, []),
       new Level(60, 0, 1, null, null, null, null, null, null, null),
       false);*/
    // this.currentPlayer = new Player('JS', null, null, '');
    if (!this.cookieService.get('player')) {
      this.currentPlayer = new Player(null, null, null, null);
      this.loadLevel(1);
      //this.loadRestaurant(0);
    } else {
      this.loadLevel(this.currentPlayer.currentLvl);
      //this.loadRestaurant(0); // this.loadRestaurant(this.currentPlayer.currentLvl);
    }

  }
  getColor(n: Number): String {
    // console.log(n+'-'+this.color.getColor(n));
    return this.color.getColor(n);
  }

  newGame() {

    this.gameStatus = true;

    console.log(this.levels);
    /*this.gameReturn.emit(this.currentGame);*/
  }
  onPlayerChange(evt: any) {
    console.log('onPlayerChange' + evt);
    if (evt === 'resetLevel') {
      this.levelLoaded = false;
      this.currentLevel = 1;
      this.currentPlayer.currentLvl = this.currentLevel;
      this.cookieService.putObject('player', this.currentPlayer);
    }
  }
  onLevelChange(evt: any) {
    console.log('onLevelChange' + evt);
    if (evt === 'Completed') {
      this.levelLoaded = false;
      //this.currentLevel = Number(this.currentLevel) + Number(1);
      this.currentLevel = this.currentLevel;
      this.currentPlayer.currentLvl = this.currentLevel;
      this.cookieService.putObject('player', this.currentPlayer);
    } else if (evt === 'endGame') {
      this.levelLoaded = false;
      //this.currentLevel = 'A' + Number(this.currentLevel);
      this.currentLevel = this.currentLevel;
      this.currentPlayer.currentLvl = this.currentLevel;
    }

  }
  loadLevel(lvl: Number) {
    console.log(lvl);
    this.levelLoaded = true;
    this.currentLevel = lvl;
    this.currentPlayer.currentLvl = lvl;
    this.cookieService.putObject('player', this.currentPlayer);
  }
  loadRestaurant(i: any) {
    console.log(this._apiData.getRestaurants());
    this.restaurantLoaded = true;
    this.currentGame.currentRestaurant = this._apiData.getRestaurant(i);

  }
}
