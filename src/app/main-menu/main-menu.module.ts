import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MainMenuComponent } from "./main-menu.component";
import { MainMenuService } from "./main-menu.service";
import { MainMenuRoutingModule } from "./main-menu-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainMenuRoutingModule,
  ],
  declarations: [
    
  ],
  providers:[
    MainMenuService
  ],

  exports:[
    
  ]
})
export class MainMenuModule { }
