import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { MeetupFacade } from "../../facades";

@IonicPage()
@Component({
  selector: 'page-member-detail',
  templateUrl: 'member-detail.html',
})
export class MemberDetailPage {
  member$: Observable<any>;

  constructor(public meetupFacade: MeetupFacade, public navParams: NavParams) { }

  ionViewDidLoad() {
    this.meetupFacade.loadMemberDetails(this.navParams.data);
    this.member$ = this.meetupFacade.getSelectedMember();
  }
}
