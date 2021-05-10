import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SwCharactersComponent} from './sw-characters/sw-characters.component'
import {SwStarshipsComponent} from './sw-starships/sw-starships.component'

const routes: Routes = [
  {path:'sw-characters', component:SwCharactersComponent},
  {path:'sw-starships', component:SwStarshipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
