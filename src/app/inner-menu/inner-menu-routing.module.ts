import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InnerMenuComponent } from "./inner-menu.component";
import { CanLoadRouteSrv } from "../utils/canLoadRouteSrv";


let mainMenuRoutes: Routes = [
    {
        path: '',
        component: InnerMenuComponent,
        children: [
            {
                path: 'drugIns',
                loadChildren: '../drug-ins/drug-ins.module#DrugInsModule',
                canLoad: [CanLoadRouteSrv]
            },
            {
                path: 'solutionIns',
                loadChildren: '../solution-ins/solution-ins.module#SolutionInsModule',
                canLoad: [CanLoadRouteSrv]
            },
            {
                path: 'generalIns',
                loadChildren: '../general-ins/general-ins.module#GeneralInsModule',
                canLoad: [CanLoadRouteSrv]
            }

        ]
    },


];


@NgModule({
    imports: [
        RouterModule.forChild(mainMenuRoutes),
        CommonModule
    ],
    declarations: [
        InnerMenuComponent
    ],

    exports: [
        RouterModule,
        InnerMenuComponent
    ]
})

export class InnerMenuRoutingModule { }