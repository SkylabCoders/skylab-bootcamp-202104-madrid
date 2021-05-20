import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DetailsComponent} from './details/details.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [

  {path:'details', component:DetailsComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'list', component:ListComponent},
  {path:'', component:DashboardComponent} // esto hace el componente principal de la pagina

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
