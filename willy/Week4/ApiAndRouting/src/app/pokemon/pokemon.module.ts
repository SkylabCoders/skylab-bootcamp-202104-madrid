import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'; 


import { PokemonRoutingModule } from './pokemon-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   BrowserModule,
   HttpClientModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
