import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import {} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    StarWarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
