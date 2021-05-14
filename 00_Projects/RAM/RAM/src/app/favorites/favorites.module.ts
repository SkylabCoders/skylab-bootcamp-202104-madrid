import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesComponent } from './favorites.component';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    HttpClientModule
  ]
})
export class FavoritesModule {
 
 }
