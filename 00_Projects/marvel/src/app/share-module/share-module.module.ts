import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http'

export function createTranslateLoader (http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader, // exported factory function needed for AoT compilation
          deps: [HttpClient]
        }
      }
    )
  ],
  exports: [
    TranslateModule
  ]
})
export class ShareModuleModule { }
