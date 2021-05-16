import { CommonModule } from '@angular/common';
import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';



@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    
    AppRoutingModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
