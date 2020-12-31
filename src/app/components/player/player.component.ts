import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/class/player';
import { Level } from 'src/app/class/level';
import { CookieService } from 'ngx-cookie';
import { isUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  // @Output() playerReturn: EventEmitter<Player>;
  @Output() sendPlayerMain: EventEmitter<any> = new EventEmitter();
  // private player: Player;
  private level: Level;
  private player2: String;
  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.level = new Level(60, 0, 1, null, null, null, null, null, null, null);
    if (isUndefined(this.player)) {
      this.player = new Player('', 0, false, '');
    }
    console.log('this.player' + this.player);
  }
  savePlayer(event?: any) {
    // Usamos el método emit+
    console.log(this.player);
    this.player.status = 'registered';
    this.cookieService.putObject('player', this.player);
    // this.playerReturn.emit(this.player);
  }

  removeCookies() {
    this.cookieService.remove('player');
    this.sendPlayerMain.emit('removeCookies');
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });

  }
  resetLevel() {
    this.player.currentLvl = 0;
    this.cookieService.putObject('player', this.player);
    this.sendPlayerMain.emit('resetLevel');

  }
}
