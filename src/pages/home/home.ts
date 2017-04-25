
import { FilterTopicsPage } from './filter-topics';
import { Observable } from 'rxjs/Rx';
import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams, PopoverController, IonicPage } from 'ionic-angular';
import { MeetupFacade } from './../../facades';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy {
  view$: Observable<string>;
  view: string = 'meetups';
  searchTerm$: Observable<string>;
  selectedTopics$: Observable<string[]>;
  meetups$: Observable<any>;
  groups$: Observable<any>;

  constructor(
    private meetupFacade: MeetupFacade,
    private popoverCtrl: PopoverController
  ) { }

  ionViewDidLoad() {
    this.selectedTopics$ = this.meetupFacade.getTopics();
    this.meetups$ = this.meetupFacade.getMeetups();
    this.groups$ = this.meetupFacade.getGroups();
    this.view$ = this.meetupFacade.getViewSeleted();
    this.searchTerm$ = this.meetupFacade.getSearchTerm();
    this.loadData();
  }

  filterPopup(ev) {
    let popover = this.popoverCtrl.create(FilterTopicsPage).present({ ev: ev });
  }

  changeView(view) {
    this.view = view;
    this.meetupFacade.updateSelectedView(view);
  }

  isMeetupEvent() {
    return this.view === 'meetups';
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

  ngOnDestroy() {

  }
}
