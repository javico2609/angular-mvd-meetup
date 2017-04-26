import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ShareModule } from "../../components/share.module";
import { MeetupEventDetailPageModule } from "../meetup-event-detail/meetup-event-detail.module";

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ShareModule,
    MeetupEventDetailPageModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
