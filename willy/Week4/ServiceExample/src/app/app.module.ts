import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListComponent,
    AlumnosDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
