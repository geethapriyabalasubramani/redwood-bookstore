import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedwoodPosRoutingModule } from './redwood-pos-routing.module';
import { RedwoodBaseComponent } from './redwood-base.component';


@NgModule({
  declarations: [
    RedwoodBaseComponent
  ],
  imports: [
    CommonModule,
    RedwoodPosRoutingModule
  ],exports:[RedwoodBaseComponent]
})
export class RedwoodPosModule { }
