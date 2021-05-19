import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { ShareModuleModule } from '../../share-module/share-module.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModuleModule
  ]
})
export class DashboardModule { }
