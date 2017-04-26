
import { Observable } from 'rxjs/Rx';
import { Component, OnDestroy } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MeetupFacade } from './../../facades';
import { MeetupConstants } from "../../constans/meetup";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy {
  view$: Observable<string>;
  view: string = MeetupConstants.MEETUP_EVENTS;
  searchTerm$: Observable<string>;
  selectedTopics$: Observable<string[]>;
  meetups$: Observable<any>;
  groups$: Observable<any>;

  constructor(public meetupFacade: MeetupFacade) { }

  ionViewDidLoad() {
    this.selectedTopics$ = this.meetupFacade.getTopics();
    this.meetups$ = this.meetupFacade.getMeetups();
    this.groups$ = this.meetupFacade.getGroups();
    this.view$ = this.meetupFacade.getViewSeleted();
    this.searchTerm$ = this.meetupFacade.getSearchTerm();
    this.loadData();
  }

  changeView(view) {
    this.view = view;
    this.meetupFacade.updateSelectedView(view);
  }

  isMeetupEvent() {
    return this.view === MeetupConstants.MEETUP_EVENTS;
  }

  loadData() {
    if (!this.isMeetupEvent()) {
      this.meetupFacade.loadGroups();
      return;
    }

    this.meetupFacade.loadMeetups();
  }

  filter(searchText: string) {
    this.meetupFacade.filterEventsOrGroup(searchText);
  }

  deleteTopic(topic) {
    this.meetupFacade.deleteTopic(topic);
  }

  ngOnDestroy() { }
}
