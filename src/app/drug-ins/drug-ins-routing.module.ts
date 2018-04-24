import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrugInsComponent } from "./drug-ins.component";

const routes: Routes = [
  {
    path: '',
    component:DrugInsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[DrugInsComponent],
  exports: [RouterModule]
})
export class DrugInsRoutingModule { }
