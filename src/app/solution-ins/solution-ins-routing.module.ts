import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionInsComponent } from "./solution-ins.component";

const routes: Routes = [
  {
    path:'',
    component: SolutionInsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[SolutionInsComponent],
  exports: [RouterModule]
})
export class SolutionInsRoutingModule { }
