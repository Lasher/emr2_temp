import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from "./main-menu.component";
import { CanLoadRouteSrv } from "../utils/canLoadRouteSrv";


let mainMenuRoutes: Routes = [
    {
        path: '',
        component: MainMenuComponent,
        children: [
            
            {
                path: 'patients',
                //component: MainMenuComponent,
                loadChildren: '../patients/patients.module#PatientsModule',
                canLoad: [CanLoadRouteSrv]
            },
            {
                path: 'discharged',
                loadChildren: '../discharged/discharged.module#DischargedModule',
                canLoad: [CanLoadRouteSrv]
            },
            {
                path: 'home',
                loadChildren: '../home/home.module#HomeModule',
                canLoad: [CanLoadRouteSrv]
            },

            { path: '**', redirectTo: '' } // not found case
        ]
    },


];


@NgModule({
    imports: [
        RouterModule.forChild(mainMenuRoutes),
        CommonModule
    ],
    declarations: [
        MainMenuComponent
    ],

    exports: [
        RouterModule,
        MainMenuComponent
    ]
})

export class MainMenuRoutingModule { }