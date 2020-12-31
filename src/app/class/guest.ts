
import { Worker } from './worker';
import { Injectable } from '@angular/core';
@Injectable()

export class Guest {
    public name: String;
    public currentLvl: Number;
    public banned: Boolean;
    public status: String;

    private _tag: String; public set tag(v: String) {
        this._tag = v;
    }

    public get tag(): String {
        return this._tag;
    }
    constructor(_name: String, _currentLvl: Number, _banned: Boolean, _status: String) {
        this._tag = 'Guest'
        this.name = _name;
        this.currentLvl = _currentLvl;
        this.banned = _banned;
        this.status = _status;
    }
    changeStatus(newStatus: String) {
        this.status = newStatus;
    }
}
