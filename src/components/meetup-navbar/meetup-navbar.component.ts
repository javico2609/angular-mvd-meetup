import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AlertController } from 'ionic-angular';
import * as _ from 'lodash';
import { MeetupConstants } from "../../constans/meetup";

@Component({
  selector: 'meetup-navbar',
  templateUrl: './meetup-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetupNavbarComponent implements OnInit {
  @Input() view;
  @Input() selectedTopics: string[];
  @Output() changeView: EventEmitter<string> = new EventEmitter();
  @Output() onFilter: EventEmitter<string> = new EventEmitter();
  @Output() onFilterTopic: EventEmitter<string[]> = new EventEmitter();

  queryText: string = '';
  topics: string[] = ['Ionic', 'Angular', 'React', 'Vue', 'Aurelia', 'C#', 'Java', 'Big Data', 'Javascript', 'Ember', '.NET'];

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() { this.view = this.view != null ? this.view : MeetupConstants.MEETUP_EVENTS }

  changeViewEvent() {
    this.changeView.emit(this.view);
  }

  updateSchedule() {
    this.onFilter.emit(this.queryText);
  }

  filterPopup(ev) {
    let alert = this.alertCtrl.create().setTitle('Filter by topics');

    _.each(
      this.topics,
      topic => alert.addInput({
        type: 'checkbox',
        label: topic,
        value: topic,
        checked: this.selectedTopics.indexOf(topic) !== -1
      })
    );

    alert
      .addButton('Cancel')
      .addButton({
        text: 'Okay',
        handler: data => {
          this.onFilterTopic.emit(data);
        }
      }).present();
  }
}