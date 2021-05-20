import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoadingListComponent} from './loading-list.component'

const routes: Routes = [
  {
    path: '', component:LoadingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingListRoutingModule { }
