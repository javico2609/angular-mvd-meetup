import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MeetupFacade } from './../../facades';

@IonicPage()
@Component({
  selector: 'page-meetup-group-detail',
  templateUrl: 'meetup-group-detail.html',
})
export class MeetupGroupDetailPage {
  group$: Observable<any>;

  constructor(public navCtrl: NavController, public meetupFacade: MeetupFacade) {}

  ionViewDidLoad() {
    this.group$ = this.meetupFacade.getSelectGroup();
  }

  seeMemberDetails(host) {
    this.navCtrl.push('MemberDetailPage', host);
  }

}
