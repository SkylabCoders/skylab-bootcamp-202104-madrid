import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosListHijoComponent } from './alumnos-list-hijo/alumnos-list-hijo.component';
import { AlumnoDetailsComponent } from './alumno-details/alumno-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListHijoComponent,
    AlumnoDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
