import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../class/game';
import { Level } from '../../class/level';
import { Player } from '../../class/player';
import { ApiDataService } from '../../api-data.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() public player: Player;
  @Input() public level: Number;
  private game: Game;
  private gameStatus: Boolean = true;
  private levelLoaded: Boolean = false;
  public levels: Level[] = [];

  constructor(private _apiData: ApiDataService, private cookieService: CookieService) { }

  ngOnInit() {
    this.levels = this._apiData.getLevels();
    this.game = new Game(this.player, new Level(60, 0, 1, null, null, null, null), false);
    // this.player = new Player('JS', null, null, '');
    if (!this.cookieService.get('player')) {
      this.player = new Player(null, null, null, null);
      this.loadLevel(0);
    } else {
      const obj = JSON.parse(this.cookieService.get('player'));
      this.player = new Player(obj.name, obj.currentLvl, obj.banned, obj.status);
      this.loadLevel(this.player.currentLvl);
    }

  }

  newGame() {

    this.gameStatus = true;

    console.log(this.levels);
    /*this.gameReturn.emit(this.game);*/
  }
  onPlayerChange(evt: any) {
    console.log('onPlayerChange' + evt);
    if ( evt === 'resetLevel') {
      this.levelLoaded = false;
      this.level = 0;
      this.player.currentLvl = this.level;
    this.cookieService.putObject('player', this.player);
    }
  }
  onLevelChange(evt: any) {
    console.log('onLevelChange' + evt);
    if ( evt === 'Completed') {
      this.levelLoaded = false;
      this.level = Number(this.level) + Number(1);
      this.player.currentLvl = this.level;
    this.cookieService.putObject('player', this.player);
    }

  }
  loadLevel(lvl: Number) {
    console.log(lvl);
    this.levelLoaded = true;
    this.level = lvl;
    this.player.currentLvl = lvl;
    this.cookieService.putObject('player', this.player);
  }
}
