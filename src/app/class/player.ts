import { Injectable } from '@angular/core';
import { Level } from './level';
import { Restaurant } from './restaurant';
@Injectable()
export class Player {
    public name: String;
    public currentLvl: Number;
    public banned: Boolean;
    public status: String;
    public currentRestaurante: Restaurant
    constructor(_name: String, _currentLvl: Number, _banned: Boolean, _status: String) {
        this.name = _name;
        this.currentLvl = _currentLvl;
        this.banned = _banned;
        this.status = _status;
    }

    updateNamePlayer(x: String) {
        this.name = x
    }

}
