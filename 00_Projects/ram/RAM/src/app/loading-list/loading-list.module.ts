import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingListRoutingModule } from './loading-list-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingListComponent } from './loading-list.component';

@NgModule({
  declarations: [
    LoadingListComponent
  ],
  imports: [
    CommonModule,
    LoadingListRoutingModule,
    HttpClientModule
  ],
})
export class LoadingListModule { }