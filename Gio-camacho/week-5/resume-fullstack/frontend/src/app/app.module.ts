import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CvComponent } from './component/cv/cv.component'
import { AsideComponent } from './component/cv/aside/aside.component'
import { MainComponent } from './component/cv/main/main.component'
import { ProfileComponent } from './component/cv/aside/profile/profile.component'
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './component/cv/aside/contact/contact.component';
import { AboutComponent } from './component/cv/main/about/about.component';
import { SkillsComponent } from './component/cv/main/skills/skills.component'

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    AsideComponent,
    MainComponent,
    ProfileComponent,
    ContactComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
