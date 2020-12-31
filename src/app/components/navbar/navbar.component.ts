import { Component, OnInit, Input } from '@angular/core';
import { ApiRestService } from 'src/app/services/apiRestService';
import { CookieService } from 'ngx-cookie';
import { AlertsService } from 'src/app/services/alerts.service';
import { Player } from 'src/app/class/player';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() player: Player;
  public isUser: Boolean = false;
  constructor( private cookie: CookieService, private alert: AlertsService) { }

  ngOnInit() {
    this.isUser = this.player !== null; // this._api.isUser();
  }

  logout() {
    this.cookie.removeAll();
    this.alert.success('OK');
  }

}
