import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import { CanLoadRouteSrv } from "../utils/canLoadRouteSrv";

let Routes: Routes = [
    { 
        path: '', 
        component: HomeComponent
    }

  ];


@NgModule({
    imports:[
        RouterModule.forChild(Routes),
        CommonModule
    ],
    declarations:[
        HomeComponent,
    ],

    exports:[
        RouterModule,
        HomeComponent
    ]
})

export class HomeRoutingModule {}