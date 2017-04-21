import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(private geolocation: Geolocation) { }

  ionViewDidLoad() {
   
  }
}
