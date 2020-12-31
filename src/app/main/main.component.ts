import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../class/player';
import { Game } from '../class/game';
import { Level } from '../class/level';
import { CookieService } from 'ngx-cookie';
import { ApiDataService } from '../services/api-data.service';
import { GameService } from '../game.service';
import { async } from 'rxjs/internal/scheduler/async';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // @Input() public player;
  // @Input() public game;
  // Usamos el decorador Output
  // @Output() PasameElPueblo = new EventEmitter();
  // private game: Game;
  private level: Level;
  private currentGame: Game = null;
  private currentPlayer: Player = null;
  // private player: Player //= new Player('Js_cmd', this.level, false, 'active');
  constructor(private cookieService: CookieService,
    private router: Router,
    private gameService: GameService, private apiData: ApiDataService) { }

  async ngOnInit() {

    if (this.currentGame || this.currentPlayer) {

      this.router.navigate(['/', {}]);
    }
    if (this.cookieService.getObject('game')) {
      let cookieGame = this.cookieService.getObject('game');
      await this.gameService.getJSONDATA(cookieGame['fileConfig']).toPromise().then((data) => {
        this.currentGame = new Game(cookieGame['name'], cookieGame['image'], cookieGame['fileConfig'], cookieGame['status'], data)
        this.currentGame.config = cookieGame['_configAsValue'];
      })

    } else {


    }
    this.currentPlayer = this.cookieService.getObject('player') as Player;
    console.log(this.currentPlayer)
    //Si hay jugador en las almacenado en las cookies

    //this.apiData.buildLevels();
    // this.level = new Level(60, 0, 1);
    // this.player = new Player('Js_cmd', this.level, false, 'active');
    // this.game = new Game(this.player, this.level,active);
  }

}
