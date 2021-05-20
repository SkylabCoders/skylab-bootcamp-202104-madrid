import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'details', component:DetailsComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: '', component:DashboardComponent}, //esto dice que página es la inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
