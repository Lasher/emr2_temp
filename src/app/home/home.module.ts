import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";
import { NavbarTopComponent } from "../navbar-top/navbar-top.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
  ]
})
export class HomeModule { }
