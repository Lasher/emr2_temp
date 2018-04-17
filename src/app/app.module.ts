import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';

import { UserKeyPressDirective } from './directives/user-key-press.directive';
import { AutoFocusDirective } from './directives/auto-focus.directive';

import { ApiService } from "./services/api.service";
import { SessionService } from "./services/session.service";
import { LoginService } from './login/login.service';
import { UserPermissionService } from "./services/user-permission.service";
import { CanLoadRouteSrv } from "./utils/canLoadRouteSrv";

import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from "./main-menu/main-menu.component";

import { MainMenuModule } from "./main-menu/main-menu.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserKeyPressDirective,
    AutoFocusDirective,
    NavbarTopComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    FormsModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    SessionService,
    LoginService,
    UserPermissionService,
    CanLoadRouteSrv
  ],
   bootstrap: [AppComponent]
})

export class AppModule { }
