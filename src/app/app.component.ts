import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Home Page
import { HomePage } from '../pages/pages';

// Store and Service Facade
import { LayoutFacade } from './../facades';

@Component({
  templateUrl: 'app.html'
})
export class IonicStarterApp implements OnInit {
  @ViewChild('content') nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController,
    private layoutFacade: LayoutFacade
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage }
    ];
  }

  ngOnInit() {
      this.layoutFacade.loadInitConfigurationAction();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#4267b2');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  ngAfterViewInit() {

  }
}
