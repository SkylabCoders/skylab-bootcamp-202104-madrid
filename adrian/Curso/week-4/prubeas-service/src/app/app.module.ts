import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnoDrtailComponent } from './alumno-drtail/alumno-drtail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListComponent,
    AlumnoDrtailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
