import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShareModuleModule } from '../../share-module/share-module.module'
import { ListRoutingModule } from './list-routing.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListRoutingModule,
    ShareModuleModule
  ]
})
export class ListModule { }
