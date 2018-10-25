import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {GameListPage} from "../pages/game-list/game-list";
import {GameDetailPage} from "../pages/game-detail/game-detail";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Pro } from '@ionic/pro';
import { SQLite  } from '@ionic-native/sqlite';
import { CategoriesProvider } from '../providers/categories/categories';
import { GamesProvider } from '../providers/games/games';




Pro.init('abdc6727', {
  appVersion: '0.0.1'
});

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    GameListPage,
    GameDetailPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    GameListPage,
    GameDetailPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SQLite,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriesProvider,
    GamesProvider
  ]
})
export class AppModule {}
