import { Component, OnInit, Input } from '@angular/core';
import { Level } from 'src/app/class/level';
import { Player } from 'src/app/class/player';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-resum',
  templateUrl: './resum.component.html',
  styleUrls: ['./resum.component.css']
})
export class ResumComponent implements OnInit {
  @Input() public level: Number;
  @Input() public player: Player;
  public levelSelected: Level[];
  constructor(private apiData: ApiDataService) { }

  ngOnInit() {
    this.levelSelected = this.apiData.getLevels();
  }

}
