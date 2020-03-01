import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-left-accordion',
  templateUrl: './left-accordion.component.html',
  styleUrls: ['./left-accordion.component.scss']
})
export class LeftAccordionComponent implements OnInit {

  
  @Output() result: EventEmitter<any> = new EventEmitter<any>(); 
  
  allSports: any[] = []; 
  allCountries: any = []; 
  allChampionShips: any[] = []; 

  selectedCountries: any[] = []; 
  selectedChampionShips: any[] = []; 
  selectedGames: any[] = []; 

  selectedSportID: string;
  selectedCountryID: string; 
  savedCountryIds: any[] = []; 

  isSportActive: boolean = false; 

  
  protected ngUnsubscribe: Subject<void> = new Subject<void>(); 

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

    this.getAllData(); 
  
  }; 

  getAllData() {

    this.appService
        .getAllData()
        .pipe( takeUntil( this.ngUnsubscribe ) )
        .subscribe( data => {
          
          const allData: any[] = data['data']; 
         
          allData.map( item => {
            
            switch ( item.level ) {
              //  * * * Get All Sports   Level - 1 * * * 
              case 1  : this.allSports.push(item); item.isActive = false; 
                  break;
              //  * * * Get All Countries  Level - 2 * * * 
              case 2 : this.allCountries.push(item); item.isActve = false; 
                break; 
              //  * * * Get All Championships   Level - 3 * * * 
              case 3 : this.allChampionShips.push(item); item.isSelected = false 
                break;
            }; 
          });
        }, err => console.log(err) ); 
  }; 

  showCountries( categoryId: string, index: number ) {

      this.selectedSportID = categoryId;
      this.selectedCountries = []; 
    
      this.allCountries.map( item => {  
  
       if ( categoryId === item.parentCategory ) {

         this.selectedCountries.push(item); 
      
       }; 

     });

    //  * * * Toggle show / hide  -  countries / champs / + , - /    of selected Sport  * * * 
     this.isSportActive === false ? this.isSportActive = true : this.isSportActive = false;
     this.allSports[index].isActive === false ? this.allSports[index].isActive = true  :
     this.allSports[index].isActive = false; 
  }; 



  showChampionShips( categoryId: string, index: number ) {    

    //  * * * Add championShips * * * 
    if ( !this.savedCountryIds.includes( categoryId ) && 
          this.selectedCountryID !== categoryId
        ) {

      this.savedCountryIds.push( categoryId );
      this.selectedCountryID = categoryId;  
      // * * *   Toggle + , - * * * 
      this.selectedCountries[index].isActive = true ;

      this.allChampionShips.map( item => {
        
        if ( categoryId === item.parentCategory ) {
          this.selectedCountryID = item.parentCategory;
          this.selectedChampionShips.push(item); 
         
        }; 

      });

      console.log(this.selectedChampionShips);
      
    } else {
      // * * *   Toggle + , - * * *
      this.selectedCountries[index].isActive = false ;

      // * * * Hide window * * * 
      const indexOfSaved  = this.savedCountryIds.indexOf(categoryId);
      this.savedCountryIds.splice(indexOfSaved, 1); 
      this.selectedCountryID = null; 
      
      // * * * Clear selectedChampionships * * * 
      this.allChampionShips.map( item => {
        if ( categoryId === item.parentCategory ) {

          const index = this.selectedChampionShips.indexOf(item); 
          this.selectedChampionShips.splice(index, 1); 

          }; 
        });
      };
    }; 


  showGames( selectedGame: any, index: number ) {

    //  * * Add selected games * * 
    if ( !this.selectedGames.includes(selectedGame) ) {
      
      this.selectedGames.push( selectedGame ); 
      console.log("heree");
      
    } else {
      //  * * clear selected games * * 
      const index = this.selectedGames.indexOf(selectedGame); 
      this.selectedGames.splice(index, 1); 
    }
    // * * * Toggle Checkbox * * * 
    this.selectedChampionShips[index].isSelected === false ? this.selectedChampionShips[index].isSelected = true : 
    this.selectedChampionShips[index].isSelected = false;
    // * * / * * 
    this.result.emit(this.selectedGames); 
 

  }

}
