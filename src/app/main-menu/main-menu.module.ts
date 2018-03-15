import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from "./main-menu.component";
import { MainMenuService } from "./main-menu.service";
import { MainMenuRoutingModule } from "./main-menu-routing.module";
import { PatientsComponent } from '../patients/patients.component';


@NgModule({
  imports: [
    CommonModule,
    MainMenuRoutingModule,
  ],
  declarations: [
    PatientsComponent
  ],
  providers:[
    MainMenuService
  ],

  exports:[
    PatientsComponent
  ]
})
export class MainMenuModule { }
