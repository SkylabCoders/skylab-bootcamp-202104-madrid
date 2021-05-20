import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DetailsRoutingModule } from './details-routing.module'
import { DetailsComponent } from './details.component'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatCardModule
  ]
})
export class DetailsModule {
}
