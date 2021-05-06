import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonComponent} from './pokemon/pokemon.component';
import {StarWarsComponent} from './star-wars/star-wars.component';

const routes: Routes = [
  {path:'pokemon', component:PokemonComponent },
  {path:'starwars', component:StarWarsComponent},
  {path:'', component:PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
