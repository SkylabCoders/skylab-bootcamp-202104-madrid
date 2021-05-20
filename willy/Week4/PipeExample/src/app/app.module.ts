import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DivisionPipe } from './pipes/division.pipe';
import { UbersetzenPipe } from './pipes/ubersetzen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DivisionPipe,
    UbersetzenPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
