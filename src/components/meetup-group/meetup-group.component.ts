import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'meetup-group',
  templateUrl: './meetup-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetupGroupComponent implements OnInit {
  @Input() groups;

  constructor() { }

  ngOnInit() {
  }

}