import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	AlertPage,
	ActionPage,
	BadgesPage,
	ButtonPage,
	CardsPage,
	RangePage,
	SearchPage,
	SlidesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	AlertPage,
	ActionPage,
	BadgesPage,
	ButtonPage,
	CardsPage,
	RangePage,
	SearchPage,
	SlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
