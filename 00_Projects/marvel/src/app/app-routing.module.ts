import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./components/list/list.module')
      .then(m => m.ListModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./components/favorites/favorites.module')
      .then(m => m.FavoritesModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./components/options/options.module')
      .then(m => m.OptionsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./components/details/details.module')
      .then(m => m.DetailsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
