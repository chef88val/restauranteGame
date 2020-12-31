import { Player } from './player';
import { Level } from './level';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';

import * as _data from '../assets/sushiGame.fileconfig.json';
//@Injectable()
export class Game {
    [x: string]: any;
    public player: Player;
    public currentLvl: Level;
    public currentRestaurant: Restaurant;
    public restaurants: Restaurant[];
    //public status: Boolean;
    private _name: String;
    private _image: String;
    private _fileConfig: string;
    private _status: String ;
    private _config: any;
    public _configAsValue: any;

    
    constructor(name: String, image: String, fileConfig: string, _status?: String, _config?:any, _configAsValue?: String) {
        this._name = name;
        this._image = image;
        this._fileConfig = fileConfig;
        this._status = 'Pre-charged';
        this._configAsValue ="asdasd"
        this.restaurants = [];
    }

    readFileConfig(_fileConfig: String):any{
        let _data = {}
        this.httpClient.get(_fileConfig).subscribe(data =>{
            console.log(data);
            this._data = data;
          })
          return _data;
    }

    addDataAsValue(d: String){
        this._configAsValue = d;
    }
    changeStatus(d?: String){
        this.status =d== null?'Cs':d;
    }
    returnConfig2(data: any){
        this._config = data;
    }
    returnConfig(){
        return this._config;
    }
    get config(): any {
        return this._config;
    }
    set config(value: any) {
        this._config = value;
    }
    get image() : String {
        return this._image;
    }
    get name() : String {
        return this._name;
    }
    get status() : String {
        return this._status;
    }
    set status(newStatus: String){
        this._status = newStatus;
    }
    get fileConfig() : string {
        return this._fileConfig;
    }
    
    set fileConfig(v : string) {
        this._fileConfig = v;
    }
    
    
    /*constructor(_player: Player, _currentRestaurant: Restaurant, _currentLvl: Level, _status: Boolean) {
        this.player = _player;
        this.currentLvl = _currentLvl;
        this.currentRestaurant = _currentRestaurant;
        this.status = _status;
    }*/
}
