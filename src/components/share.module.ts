import { DistancePipe } from './pipes/distance.pipe';
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [  DistancePipe ],
  exports:      [ DistancePipe ],
  providers:    [  ]
})
export class ShareModule { }