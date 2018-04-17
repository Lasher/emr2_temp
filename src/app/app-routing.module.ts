import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { PatientsComponent } from "./patients/patients.component";
import { CanLoadRouteSrv } from "./utils/canLoadRouteSrv";

const appRoutes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule', canLoad: [CanLoadRouteSrv] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' } // not found case
];

const appRoutes2: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'patients', component: PatientsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' } // not found case
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {})
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }