import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisionPipe } from './pipes/division.pipe';
import { TransPipe } from './pipes/pipes/trans.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DivisionPipe,
    TransPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
