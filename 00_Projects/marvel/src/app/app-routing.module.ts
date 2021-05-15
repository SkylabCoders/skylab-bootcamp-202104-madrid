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
      .then(module => module.DashboardModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./components/list/list.module')
      .then(module => module.ListModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./components/favorites/favorites.module')
      .then(module => module.FavoritesModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./components/options/options.module')
      .then(module => module.OptionsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module')
      .then(module => module.LoginModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./components/details/details.module')
      .then(module => module.DetailsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
