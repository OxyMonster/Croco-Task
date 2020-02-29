import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-games-content-main',
  templateUrl: './games-content-main.component.html',
  styleUrls: ['./games-content-main.component.scss']
})
export class GamesContentMainComponent implements OnInit {

 @Input() selectedGames: any[] = []; 


  constructor() { }

  ngOnInit() {


  }; 



}
