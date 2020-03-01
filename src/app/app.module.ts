import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftAccordionComponent } from './left-accordion/left-accordion.component';
import { GamesContentRightComponent } from './games-content-right/games-content-right.component';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LeftAccordionComponent,
    GamesContentRightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
