import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main.component";
import { CanLoadRouteSrv } from "../utils/canLoadRouteSrv";
import { NavbarTopComponent } from "../navbar-top/navbar-top.component";

let Routes: Routes = [
    { 
        path: '', 
        component: MainComponent,
        children: [ 
            { 
            path: '',
            loadChildren: '../main-menu/main-menu.module#MainMenuModule',
        }
    ]
    },
    
      
  ];


@NgModule({
    imports:[
        RouterModule.forChild(Routes),
        CommonModule
    ],
    declarations:[
        MainComponent,
        NavbarTopComponent
    ],

    exports:[
        RouterModule,
        MainComponent
    ]
})

export class MainRoutingModule {}
