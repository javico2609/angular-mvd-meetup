
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
export class HomePage implements OnDestroy{
  view: string;
  viewSubscribe: any;
  queryText: string = '';
  selectedTopics$: Observable<string[]>;
  meetups$: Observable<any>;
  groups$: Observable<any>;

  constructor(
    private meetupFacade: MeetupFacade,
    private popoverCtrl: PopoverController
  ) { }

  ionViewDidLoad() {
    this.meetupFacade.loadMeetups();
    this.selectedTopics$ = this.meetupFacade.getTopics();
    this.meetups$ = this.meetupFacade.getMeetups();
    this.groups$ = this.meetupFacade.getGroups();
    this.viewSubscribe = this.meetupFacade.getViewSeleted().subscribe(view => this.view = view);
  }

  filterPopup(ev) {
    let popover = this.popoverCtrl.create(FilterTopicsPage).present({ ev: ev });
  }

  changeView() {
    this.meetupFacade.updateSelectedView(this.view);
  }

  ngOnDestroy() {
    this.viewSubscribe.unsubscribe();
  }
}
