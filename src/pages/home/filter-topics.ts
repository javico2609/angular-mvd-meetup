import { Component } from '@angular/core';

@Component({
  template: `
    <ion-list class="popover-page">
      <ion-item class="text-athelas">
        <ion-label>Ionic</ion-label>
        <ion-checkbox value="Ionic"></ion-checkbox>
      </ion-item>
      <ion-item class="text-charter">
        <ion-label>React</ion-label>
        <ion-checkbox value="React"></ion-checkbox>
      </ion-item>
      <ion-item class="text-iowan">
        <ion-label>Angular</ion-label>
        <ion-checkbox value="Angular"></ion-checkbox>
      </ion-item>
      <ion-item class="text-palatino">
        <ion-label>Vue</ion-label>
        <ion-checkbox value="Vue"></ion-checkbox>
      </ion-item>
      <ion-item class="text-san-francisco">
        <ion-label>Aurelia</ion-label>
        <ion-checkbox value="Aurelia"></ion-checkbox>
      </ion-item>
      <ion-item class="text-seravek">
        <ion-label>C#</ion-label>
        <ion-checkbox value="C#"></ion-checkbox>
      </ion-item>
      <ion-item class="text-times-new-roman">
        <ion-label>Java</ion-label>
        <ion-checkbox value="Java"></ion-checkbox>
      </ion-item>
      <ion-item class="text-times-new-roman">
        <ion-label>Big Data</ion-label>
        <ion-checkbox value="Big Data"></ion-checkbox>
      </ion-item>
      <ion-item class="text-times-new-roman">
        <ion-label>Javascript</ion-label>
        <ion-checkbox value="Javascript"></ion-checkbox>
      </ion-item>
    </ion-list>
  `
})
export class FilterTopicsPage {
 
  constructor() {

  }

  ngOnInit() {
    
  } 
}