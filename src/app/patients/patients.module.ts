import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from "./paitents-routing.module";

import { PatientsComponent } from "./patients.component";

@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule
  ],
  declarations: [
  ]
})
export class PatientsModule { }
