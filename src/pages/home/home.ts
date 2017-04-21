import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  view: string = "meetups";
  selectedTopics: string[] = [];

  constructor() { }

  ionViewDidLoad() {
    this.selectedTopics = [
      'Ionic',
      'Angular 2',
      'React'
    ];
  }
}
