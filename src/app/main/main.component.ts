import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../class/player';
import { Game } from '../class/game';
import { Level } from '../class/level';
import { CookieService } from 'ngx-cookie';
import { ApiDataService } from '../services/api-data.service';

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
  // private player: Player //= new Player('Js_cmd', this.level, false, 'active');
  constructor(private cookieService: CookieService, private apiData: ApiDataService) { }

  ngOnInit() {
    this.apiData.buildLevels();
    // this.level = new Level(60, 0, 1);
    // this.player = new Player('Js_cmd', this.level, false, 'active');
    // this.game = new Game(this.player, this.level,active);
  }

}
