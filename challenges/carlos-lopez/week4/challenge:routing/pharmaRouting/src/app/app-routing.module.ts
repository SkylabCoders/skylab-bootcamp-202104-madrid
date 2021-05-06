import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component'
import { BasketComponent } from './basket/basket.component';
const routes: Routes = [
  {path: 'list', component:ListComponent},
  {path: 'basket', component:BasketComponent},
  {path: '', component:ListComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
