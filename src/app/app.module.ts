import { HellComponent } from './hello/hello.component';
// Ban than la js model
// Import model ben ngoai
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // declarations: la noi khai bao module nao do
  declarations: [
    AppComponent,
    HellComponent,
  ],
  imports: [
    BrowserModule,
    // Dung thay vi cai form module
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppComponent la component
})
export class AppModule { }

// Typescript Module
// Typescript Decorator
