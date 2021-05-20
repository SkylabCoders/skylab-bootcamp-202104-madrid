import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoDetailComponent } from './alumno-detail/alumno-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
