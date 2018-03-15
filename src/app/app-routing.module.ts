import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, loadChildren: './main-menu/main-menu.module#MainMenuModule' },
    { path: 'login', component: LoginComponent },
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