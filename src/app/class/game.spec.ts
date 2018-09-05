import { Player } from './player';
import { Level } from './level';
import { Injectable } from '@angular/core';
@Injectable()
export class Game {
    private player: Player;
    private currentLvl: Level;
    public status: Boolean;
    constructor(_player: Player, _currentLvl: Level, _status: Boolean) {
        this.player = _player;
        this.currentLvl = _currentLvl;
        this.status = _status;
    }
}
