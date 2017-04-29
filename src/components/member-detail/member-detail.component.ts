import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'member-detail',
  templateUrl: './member-detail.component.html'
})
export class MemberDetailComponent implements OnInit {
  @Input() member;

  constructor() { }

  ngOnInit() { }

}