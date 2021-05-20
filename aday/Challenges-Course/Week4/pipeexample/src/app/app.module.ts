import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisionPipe } from './pipes/division.pipe';
import { TraductorPipe } from './pipes/traductor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DivisionPipe,
    TraductorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
