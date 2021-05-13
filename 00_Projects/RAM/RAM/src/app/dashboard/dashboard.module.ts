import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
// import { ShareModuleModule } from '../share-module/share-module.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    HttpClientModule,
    MatGridListModule,
    // ShareModuleModule 
  ]
})
export class DashboardModule {
 
 }
