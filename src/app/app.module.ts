import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { SerieService } from './services/serie.service';
import { SeriesPage } from '../pages/series/series';
import { ContactPage } from '../pages/contact/contact';
import { DetailsPage } from '../pages/details/details';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
    apiKey: "AIzaSyAai9sDqZhhJNa_86cXxIHDXEX1e_WDRrw",
    authDomain: "movies-9f021.firebaseapp.com",
    databaseURL: "https://movies-9f021.firebaseio.com",
    projectId: "movies-9f021",
    storageBucket: "movies-9f021.appspot.com",
    messagingSenderId: "1030325236365"
};


@NgModule({
  declarations: [
    MyApp,
    SeriesPage,
    DetailsPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SeriesPage,
    DetailsPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SerieService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
