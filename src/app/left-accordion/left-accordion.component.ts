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
  selectedGame: any[]; 


  selectedSportID: string;
  selectedCountryID: string; 
  savedCountryIds: any[] = []; 

  
  protected ngUnsubscire: Subject<void> = new Subject<void>(); 

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

    this.getAllData(); 

  }; 

  getAllData() {

    this.appService
        .getAllData()
        .pipe( takeUntil( this.ngUnsubscire ) )
        .subscribe( data => {
          
          const allData: any[] = data['data']; 
         
          allData.map( item => {
            
            switch ( item.level ) {
              //  * * * Get All Sports   Level - 1 * * * 
              case 1  : this.allSports.push(item); 
                  break;
              //  * * * Get All Countries  Level - 2 * * * 
              case 2 : this.allCountries.push(item); 
                break; 
              //  * * * Get All Championships   Level - 3 * * * 
              case 3 : this.allChampionShips.push(item); 
                break;
            
            }; 

          });
          
        }, err => console.log(err) ); 

  }; 

  showCountries( categoryId: string ) {
    
      this.selectedSportID = categoryId;
      this.selectedCountries = []; 
  
      this.allCountries.map( item => {
  
       if ( categoryId === item.parentCategory ) {
  
         this.selectedCountries.push(item); 
         
       }
       
     });
  
     console.log(this.selectedCountries);
    
  }; 



  showChampionShips( categoryId: string ) {    
       
    //  * * * Add championships * * * 
    if ( !this.savedCountryIds.includes( categoryId ) && 
          this.selectedCountryID !== categoryId
        ) {
      
      this.savedCountryIds.push( categoryId );
      this.selectedCountryID = categoryId;  
  
      this.allChampionShips.map( item => {
  
        if ( categoryId === item.parentCategory ) {
          this.selectedCountryID = item.parentCategory
          this.selectedChampionShips.push(item); 
        }; 
  
      });

      console.log(this.selectedChampionShips);
      
    } else {
      
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


  showGames( selectedGame ) {

    this.result.emit([selectedGame]); 
    console.log(selectedGame);
      
    }

}
