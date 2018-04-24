import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralInsComponent } from "./general-ins.component";

const routes: Routes = [
  {
    path:'',
    component: GeneralInsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[GeneralInsComponent],
  exports: [RouterModule]
})
export class GeneralInsRoutingModule { }
