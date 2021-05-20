import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path:'',
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
