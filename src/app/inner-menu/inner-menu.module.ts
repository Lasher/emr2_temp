import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerMenuComponent } from './inner-menu.component';
import { RouterModule } from "@angular/router";
import { InnerMenuRoutingModule } from "./inner-menu-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InnerMenuRoutingModule
  ],
  declarations: []
})
export class InnerMenuModule { }
