import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

declare var google: any;

@IonicPage()
@Component({
  selector: 'meetup-event-detail',
  templateUrl: 'meetup-event-detail.html',
})
export class MeetupEventDetailPage {
  @ViewChild('map') mapElement: ElementRef;

  map: any;
  meetup: any;
  hosts: any = [];
  comments: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public zone: NgZone, public platform: Platform
  ) {
    this.meetup = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetupEventDetailPage');
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      if (!!google) {
        this.initializeMap();
      } else {
        console.log('There was a weird error when trying to load google api..');
      }
    });
  }

  initializeMap() {
    this.zone.run(() => {
      let mapStyles = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 13 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#08304b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#0c4152" }, { "lightness": 5 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b434f" }, { "lightness": 25 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b3d51" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "color": "#146474" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#021019" }] }];

      let mapOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: mapStyles,
        disableDoubleClickZoom: false,
        disableDefaultUI: true,
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let lat, lon;
      
      if (this.meetup.venue) {
        lat = this.meetup.venue.lat;
        lon = this.meetup.venue.lon;
      } else {
        lat = this.meetup.group.group_lat;
        lon = this.meetup.group.group_lon;
      }

      let markerData = {
        position: {
          lat: lat,
          lng: lon
        },
        map: this.map,
      };

      this.map.setCenter(new google.maps.Marker(markerData).getPosition());
    });
  }
}
