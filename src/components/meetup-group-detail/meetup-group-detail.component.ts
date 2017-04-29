import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'meetup-group-detail',
  templateUrl: './meetup-group-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetupGroupDetailComponent implements OnInit {
  @Input() group;
  @Output() onShowMemberDetails: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  seeMemberDetails(member) {
    this.onShowMemberDetails.emit(member);
  }
}