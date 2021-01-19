import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContentComponent} from './app-content/app-content.component';
import {DetailContentComponent} from './app-detail/app-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    DetailContentComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
