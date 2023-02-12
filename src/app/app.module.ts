import { HellComponent } from './hello/hello.component';
// Ban than la js model
// Import model ben ngoai
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";

@NgModule({
  // declarations: la noi khai bao module nao do
  declarations: [
    AppComponent,
    HellComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppComponent la component
})
export class AppModule { }

// Typescript Module
// Typescript Decorator
