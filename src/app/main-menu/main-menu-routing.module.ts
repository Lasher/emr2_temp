import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from "./main-menu.component";
import { PatientsComponent } from '../patients/patients.component';


let mainMenuRoutes: Routes = [
    { 
        path: '*', 
        component: MainMenuComponent,
        children: [
            { path: 'patients', component: PatientsComponent },
        ]
    },
      
  ];


@NgModule({
    imports:[
        RouterModule.forChild(mainMenuRoutes)
    ],
    declarations:[
        MainMenuComponent
    ],

    exports:[
        RouterModule,
        MainMenuComponent
    ]
})

export class MainMenuRoutingModule {}