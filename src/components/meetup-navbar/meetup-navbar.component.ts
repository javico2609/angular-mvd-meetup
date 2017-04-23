import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'meetup-navbar',
  templateUrl: './meetup-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetupNavbarComponent implements OnInit {
  @Input() view;
  @Output() changeView: EventEmitter<string> = new EventEmitter();
  @Output() onFilter: EventEmitter<string> = new EventEmitter();

  queryText: string = '';

  constructor() { }

  ngOnInit() {
  }

  changeViewEvent() {
    this.changeView.emit(this.view);
  }

  updateSchedule() {
    this.onFilter.emit(this.queryText);
  }
}