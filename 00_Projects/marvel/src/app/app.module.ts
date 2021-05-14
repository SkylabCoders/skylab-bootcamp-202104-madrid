import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
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
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

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
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
