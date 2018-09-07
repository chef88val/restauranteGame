
import { Injectable } from '@angular/core';
@Injectable()

export class Guest {
        public name: String;
        public currentLvl: Number;
        public banned: Boolean;
        public status: String;
        constructor(_name: String, _currentLvl: Number, _banned: Boolean, _status: String) {
            this.name = _name;
            this.currentLvl = _currentLvl;
            this.banned = _banned;
            this.status = _status;
        }
        changeStatus(newStatus: String) {
            this.status = newStatus;
        }
}
