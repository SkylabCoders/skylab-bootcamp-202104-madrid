import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ListComponent } from './components/list/list.component'
import { FavoritesComponent } from './components/favorites/favorites.component'
import { LoginComponent } from './components/login/login.component'
import { OptionsComponent } from './components/options/options.component'
import { DetailsComponent } from './components/details/details.component'
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
// import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { ShareModuleModule } from '../app/share-module/share-module.module'

// export function createTranslateLoader (http: HttpClient) {
//   return new TranslateHttpLoader(http)
// }
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ListComponent,
    FavoritesComponent,
    LoginComponent,
    OptionsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
