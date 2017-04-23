import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'meetup-event',
  templateUrl: './meetup-event.component.html'
})
export class MeetupEventComponent implements OnInit {
  @Input() meetups;

  constructor() { }

  ngOnInit() {
  }

  headerMeetupFn(record, recordIndex, records) {
    let datePipe = new DatePipe('en-US');
    let currentDate = datePipe.transform(record.time);

    if (recordIndex === 0) return currentDate;
    if (currentDate != datePipe.transform(records[recordIndex - 1].time)) return currentDate;

    return null;
  }

}