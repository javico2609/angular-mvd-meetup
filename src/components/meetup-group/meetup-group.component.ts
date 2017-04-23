import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'meetup-group',
  templateUrl: './meetup-group.component.html'
})
export class MeetupGroupComponent implements OnInit {
  @Input() groups;

  constructor() { }

  ngOnInit() {
  }

}