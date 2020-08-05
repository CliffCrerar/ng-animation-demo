import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { LeftRightComponent, TextFlyIn } from './left-right/left-right.component';

@NgModule({
  declarations: [
    AppComponent,OpenCloseComponent, LeftRightComponent,TextFlyIn
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
