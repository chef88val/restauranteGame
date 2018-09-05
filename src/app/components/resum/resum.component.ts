import { Component, OnInit, Input } from '@angular/core';
import { Level } from '../../class/level';
import { Player } from '../../class/player';
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-resum',
  templateUrl: './resum.component.html',
  styleUrls: ['./resum.component.css']
})
export class ResumComponent implements OnInit {
  @Input() public level: Number;
  @Input() public player: Player;
  private levelSelected: Level[];
  constructor(private apiData: ApiDataService) { }

  ngOnInit() {
    this.levelSelected = this.apiData.getLevels();
  }

}
