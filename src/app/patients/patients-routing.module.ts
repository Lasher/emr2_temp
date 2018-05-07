import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { InnerMenuModule } from '../inner-menu/inner-menu.module';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientsService } from './patients.service';
import {TableModule} from 'primeng/table';
import { CommonModule } from '@angular/common';


const Routes: Routes = [
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
    },
    { path: '**', redirectTo: '' } // not found case

];


@NgModule({
    imports: [
        RouterModule.forChild(Routes),
        CommonModule,
        TableModule
    ],
    declarations: [
        PatientsComponent,
        PatientDetailComponent
    ],
    providers: [
        PatientsService
    ],
    exports: [
        RouterModule
    ]
})

export class PatientsRoutingModule {}
