import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetupEventDetailPage } from './meetup-event-detail';

@NgModule({
  declarations: [
    MeetupEventDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetupEventDetailPage),
  ],
  exports: [
    MeetupEventDetailPage
  ]
})
export class MeetupEventDetailPageModule {}
