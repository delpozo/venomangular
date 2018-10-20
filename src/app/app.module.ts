import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AddComponent } from './add/add.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule,HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
