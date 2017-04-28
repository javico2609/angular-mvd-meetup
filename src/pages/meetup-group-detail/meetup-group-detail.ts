import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meetup-group-detail',
  templateUrl: 'meetup-group-detail.html',
})
export class MeetupGroupDetailPage {
  group: any = {};
  members: any = [];
  meetups: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.group = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetupGroupDetailPage');
  }

}
