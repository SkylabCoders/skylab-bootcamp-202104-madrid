import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShareModuleModule } from '../../share-module/share-module.module'
import { OptionsRoutingModule } from './options-routing.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    ShareModuleModule
  ]
})
export class OptionsModule { }
