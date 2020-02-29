import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-games-content-main',
  templateUrl: './games-content-main.component.html',
  styleUrls: ['./games-content-main.component.scss']
})
export class GamesContentMainComponent implements OnInit {

 @Input() selectedGames: any[] = []; 


 selectedSportsName: string; 
 selectedChampName: string; 

  constructor() { }

  ngOnInit() {

    

  }; 

  getTitles() {  
    if ( this.selectedGames.length > 0 ) {

      this.selectedSportsName = this.selectedGames[0]['sportName']; 
      this.selectedChampName = this.selectedGames[0]['parentName']; 
      console.log(this.selectedSportsName);
      
    }
  }
  


}
