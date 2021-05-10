import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {PokemonComponent} from './pokemon/pokemon.component'
// import {StarwarsComponent} from './starwars/starwars.component';

const routes: Routes = [
  
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  // {path: 'starwars', component: StarwarsComponent};
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
