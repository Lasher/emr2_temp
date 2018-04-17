import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import { CanLoadRouteSrv } from "../utils/canLoadRouteSrv";
import { NavbarTopComponent } from "../navbar-top/navbar-top.component";

let Routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
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
        HomeComponent,
        NavbarTopComponent
    ],

    exports:[
        RouterModule,
        HomeComponent
    ]
})

export class HomeRoutingModule {}