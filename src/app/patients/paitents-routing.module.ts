import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';


let Routes: Routes = [
    { 
        path: '', 
        component: PatientsComponent
    },
      
  ];


@NgModule({
    imports:[
        RouterModule.forChild(Routes)
    ],
    declarations:[
        PatientsComponent
    ],

    exports:[
        RouterModule
    ]
})

export class PatientsRoutingModule {}