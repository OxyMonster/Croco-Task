import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'croco-task';

  selectedGames: any[] = []; 


  getSelectedGames( e ) {

    this.selectedGames = e; 
    console.log(this.selectedGames);
    

  };
  
}
