import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DIForumComponent } from './components/di-forum/di-forum.component';
import { DIForumItemComponent } from './components/di-forum-item/di-forum-item.component';
import { DIForumDetailsComponent } from './components/di-forum-details/di-forum-details.component';
import {HttpClientModule} from "@angular/common/http";
import {DIDataService} from "./di-data.service";

@NgModule({
  declarations: [
    AppComponent,
    DIForumComponent,
    DIForumItemComponent,
    DIForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DIDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
