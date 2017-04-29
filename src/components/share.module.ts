import { HighlightPipe } from './pipes/highlight.pipe';
import { DistancePipe } from './pipes/distance.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupGroupComponent } from './meetup-group/meetup-group.component';

import { IonicModule } from 'ionic-angular';
import { MeetupEventComponent } from './meetup-event/meetup-event.component';
import { MeetupNavbarComponent } from './meetup-navbar/meetup-navbar.component';
import { MeetupGroupDetailComponent } from './meetup-group-detail/meetup-group-detail.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    DistancePipe,
    HighlightPipe,
    MeetupGroupComponent,
    MeetupEventComponent,
    MeetupNavbarComponent,
    MeetupGroupDetailComponent,
    MemberDetailComponent
],
  exports: [
    MeetupGroupComponent,
    MeetupEventComponent,
    DistancePipe,
    HighlightPipe,
    MeetupNavbarComponent,
    MeetupGroupDetailComponent,
    MemberDetailComponent
  ],
  providers: []
})
export class ShareModule { }