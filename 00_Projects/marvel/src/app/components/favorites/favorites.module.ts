import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShareModuleModule } from '../../share-module/share-module.module'
import { FavoritesRoutingModule } from './favorites-routing.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    ShareModuleModule
  ]
})
export class FavoritesModule { }
