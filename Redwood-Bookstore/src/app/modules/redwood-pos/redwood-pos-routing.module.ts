import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedwoodBaseComponent } from './redwood-base.component';

const routes: Routes = [{path:"",component:RedwoodBaseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedwoodPosRoutingModule { }
