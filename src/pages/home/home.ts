import { DatePipe } from '@angular/common';
import { FilterTopicsPage } from './filter-topics';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { MeetupFacade } from './../../facades';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  view: string = "meetups";
  queryText: string = '';
  selectedTopics$: Observable<string[]>;
  meetups$: Observable<any>;

  constructor(
    private meetupFacade: MeetupFacade,
    private popoverCtrl: PopoverController
  ) { }

  ionViewDidLoad() {
    this.meetupFacade.loadMeetups();
    this.selectedTopics$ = this.meetupFacade.getTopics();
    this.meetups$ = this.meetupFacade.getMeetups();
  }

  headerMeetupFn(record, recordIndex, records) {
    let datePipe = new DatePipe('en-US');
    let currentDate = datePipe.transform(record.time);

    if (recordIndex === 0) return currentDate;
    if (currentDate != datePipe.transform(records[recordIndex - 1].time)) return currentDate;

    return null;
  }

  filterPopup(ev) {
    let popover = this.popoverCtrl.create(FilterTopicsPage).present({ ev: ev });
  }
}
