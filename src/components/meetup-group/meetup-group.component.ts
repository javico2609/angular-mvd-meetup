import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'meetup-group',
  templateUrl: './meetup-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetupGroupComponent implements OnInit {
  @Input() groups;
  @Input() searchTerm;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectGroup(group) {
    this.onSelect.emit(group);
  }

}