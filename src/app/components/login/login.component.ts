import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../class/player';
import { ApiRestService } from '../../services/apiRestService';
// import { AppComponent } from '../../../app.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { CookieService } from 'ngx-cookie';
// import { Alert, AlertType } from '../../../alert';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() player: Player;
  private playerLogin: Player = new Player('', 0, false, 'draft');
  public profiles: any = ['-', 'SF'];
  private email: String;
  private isNew: Boolean = false;
  constructor(private route: ActivatedRoute, private _route: Router, private cookie: CookieService,
    private _api: ApiRestService,   private alert: AlertsService) { }

  ngOnInit() {
    console.log('asdasd');
    this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
      console.log(params);
      if (params.email) {
        // this.email = params.email;
        // In a real app: dispatch action to load the details here.
        this.isNew = true;
        // this.playerLogin.email = params.email;

      } else { this.isNew = false; }
    });
    // this._api.getFeed(this.id).then((params)=>{console.log(params);return params})
    if (!this.isNew) {
      // this._api.getAdmin().then((data) => { console.log(data.profilesAPI); this.profiles.push(data.profilesAPI); });
      console.log(this.profiles);
      // this._api.setPlayer(this.playerLogin);
      this._route.navigate(['']);
    }

  }

  login(player) {
    console.log(player);
    if (!isNaN(player)) {
      // if ('_id' in data || data.status > 0) {
        console.log('_id');
        // this._api.setPlayer(data);
        // this.main.checkPlayer(true);
        this.cookie.put('isLogged', 'true');
        this.cookie.putObject('playerLogged', player);
        this._route.navigate(['/']);
     //  } else {
        // this.main.checkPlayer(false)
        this.alert.error('Error');
     //  }
      console.log('1', player);
      if (this.isNew) { this._route.navigate(['']); }
      this.alert.success('OK');
    }

    // console.log('resp',resp);
    /*.then((data)=>{
      console.log(data);
    });*/
    /*} else {

    }*/
  }

}
