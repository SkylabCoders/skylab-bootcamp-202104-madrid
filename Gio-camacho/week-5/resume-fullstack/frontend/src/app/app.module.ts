import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './component/cv/cv.component';
import { AsideComponent } from './component/cv/aside/aside.component';
import { MainComponent } from './component/cv/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    AsideComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
