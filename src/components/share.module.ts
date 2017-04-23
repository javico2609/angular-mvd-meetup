import { DistancePipe } from './pipes/distance.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupGroupComponent } from './meetup-group/meetup-group.component';

import { CardModule, IonicModule } from 'ionic-angular'; 
import { MeetupEventComponent } from './meetup-event/meetup-event.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    DistancePipe,
    MeetupGroupComponent,
    MeetupEventComponent
],
  exports: [MeetupGroupComponent, MeetupEventComponent, DistancePipe],
  providers: []
})
export class ShareModule { }