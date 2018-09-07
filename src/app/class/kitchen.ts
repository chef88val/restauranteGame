import { Cooker } from './cooker';
import { Injectable } from '@angular/core';
@Injectable()
export class Kitchen {
    private name: String;
    private nCookers: Number;
    private cookers: Cooker[];
    constructor(_name: String, _nCookers: Number, _cookers: Cooker[]) {
        this.cookers = _cookers;
        this.name = _name;
        this.nCookers = _nCookers;
    }
}
