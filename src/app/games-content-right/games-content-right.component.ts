import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-games-content-right',
  templateUrl: './games-content-right.component.html',
  styleUrls: ['./games-content-right.component.scss']
})
export class GamesContentRightComponent implements OnInit {
  
  @Input() selectedGames: any[] = []; 

  constructor() { }

  ngOnInit() {
  }

}
