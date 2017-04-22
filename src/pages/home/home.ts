import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MeetupFacade } from './../../facades';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  view: string = "meetups";
  selectedTopics$: Observable<string[]>;
  meetups$: Observable<any>;

  constructor(private meetupFacade: MeetupFacade) { }

  ionViewDidLoad() {
    this.meetupFacade.loadMeetups();
    this.selectedTopics$ = this.meetupFacade.getTopics();
    this.meetups$ = this.meetupFacade.getMeetups();
  }

  headerMeetupFn(record, recordIndex, records) {
    return record.group.name;
  }
}
