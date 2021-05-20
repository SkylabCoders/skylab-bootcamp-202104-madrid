import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StarWarsComponent } from './star-wars/star-wars.component';


const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: 'starwars',
    component:StarWarsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
