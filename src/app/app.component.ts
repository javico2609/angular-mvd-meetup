import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Store and Service Facade
import { LayoutFacade } from './../facades';

@Component({
  templateUrl: 'app.html'
})
export class IonicStarterApp implements OnInit {

  rootPage: string = 'HomePage';

  constructor(
    public platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private layoutFacade: LayoutFacade
  ) {
    this.initializeApp();
  }

  ngOnInit() {
      this.layoutFacade.loadInitConfigurationAction();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('rgb(237,28,64)');
      this.splashScreen.hide();
    });
  }

  ngAfterViewInit() {

  }
}
