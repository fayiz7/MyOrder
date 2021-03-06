import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { InitiateStorePage } from '../pages/initiate-store/initiate-store';
import { SetLocationPage } from '../pages/set-location/set-location';
import { BrowsePage } from '../pages/browse/browse';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';


const firebaseAuth = {
  apiKey: "AIzaSyCwZdWRaz_Pq6cuOsX5cilzUrJqtzbvWrs",
  authDomain: "test-360ee.firebaseapp.com",
  databaseURL: "https://test-360ee.firebaseio.com",
  projectId: "test-360ee",
  storageBucket: "test-360ee.appspot.com",
  messagingSenderId: "379800977798"
};







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    ShoppingListPage,
    AddShoppingPage,
    InitiateStorePage,
    SetLocationPage,
    BrowsePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBVY3zvH1WmEw09pWhTpaSWQJ6hYVhHtFM'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    ShoppingListPage,
    AddShoppingPage,
    InitiateStorePage,
    SetLocationPage,
    BrowsePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
