import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../class/player.spec';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() player: Player; // : User;

  constructor() { }

  ngOnInit() {
  }
}
