import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { InnerMenuModule } from "../inner-menu/inner-menu.module";
import { PatientDetailComponent } from './patient-detail/patient-detail.component';


let Routes: Routes = [
    {
        path: '',
        component: PatientsComponent,
    },
    {
        path: 'patientDetail',
        component: PatientDetailComponent,
        children: [
            {
                path: '',
                loadChildren: '../inner-menu/inner-menu.module#InnerMenuModule'
            }
        ]
    }

];


@NgModule({
    imports: [
        RouterModule.forChild(Routes),
    ],
    declarations: [
        PatientsComponent,
        PatientDetailComponent
    ],

    exports: [
        RouterModule
    ]
})

export class PatientsRoutingModule { }