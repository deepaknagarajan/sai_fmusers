import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FmusersComponent } from './fmusers/fmusers.component';
import { AppService } from './services/app.service.client';
import { HttpClientModule } from '@angular/common/http';
import { ViewUsersComponent } from './view-users/view-users.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FmusersComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
