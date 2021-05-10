import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FavoritesComponent } from './favorites.component'
import { LoginComponent } from '../login/login.component'

const routes: Routes = [
  {
    path: 'favorites', component: FavoritesComponent
  },
  {
    path: '', component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
