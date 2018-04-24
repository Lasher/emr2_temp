import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DischargedComponent } from "./discharged.component";


let Routes: Routes = [
    { 
        path: '', 
        component: DischargedComponent
    },
      
  ];


@NgModule({
    imports:[
        RouterModule.forChild(Routes)
    ],
    declarations:[
        DischargedComponent
    ],

    exports:[
        RouterModule
    ]
})

export class DischargedRoutingModule {}