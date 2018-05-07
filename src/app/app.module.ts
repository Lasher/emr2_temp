//-- modules
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

//-- custom modules
import { AppRoutingModule } from "./app-routing.module";

//-- components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//-- directives
import { UserKeyPressDirective } from './directives/user-key-press.directive';
import { AutoFocusDirective } from './directives/auto-focus.directive';

//-- services
import { ApiService } from "./services/api.service";
import { SessionService } from "./services/session.service";
import { LoginService } from './login/login.service';
import { UserPermissionService } from "./services/user-permission.service";
import { CanLoadRouteSrv } from "./utils/canLoadRouteSrv";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserKeyPressDirective,
    AutoFocusDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
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
