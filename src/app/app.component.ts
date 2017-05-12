import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlertPage } from '../pages/alert/alert';
import { ActionPage } from '../pages/action/action';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonPage } from '../pages/button/button';
import { CardsPage } from '../pages/cards/cards';
import { RangePage } from '../pages/range/range';
import { SearchPage } from '../pages/searchbar/searchbar';
import { SlidesPage } from '../pages/slides/slides';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
	  { title: 'Alert', component: AlertPage },
	  { title: 'Action', component: ActionPage },
	  { title: 'Badges', component: BadgesPage },
	  { title: 'Button', component: ButtonPage },
	  { title: 'Cards', component: CardsPage },
	  { title: 'Range', component: RangePage },
	  { title: 'Search', component: SearchPage },
	  { title: 'Slide', component: SlidesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
