import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service';

import { LoginPage } from '../pages/Authentication/login';
import { AkunPage } from '../pages/akun/akun';
import { HistoryPage } from '../pages/history/history';
import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { TabsPage } from '../pages/tabs/tabs';
import { InseminasiPage } from '../pages/inseminasi/inseminasi';
import { BeritaPage } from '../pages/berita terbaru/berita';
import { InfoPage } from '../pages/info ternak/info';
import { KonsultasiPage } from '../pages/konsultasi/konsultasi';
import { RecordingPage } from '../pages/recording/recording';
import { BibitPage } from '../pages/tipe bibit/bibit';
import { DaftarInseminatorPage } from '../pages/inseminasi/daftarInseminator';
import { PemesananPage } from '../pages/inseminasi/pemesanan';
import { DaftarTernakPage } from '../pages/recording/daftarTernak';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetailBeritaPage } from '../pages/berita terbaru/detailBerita';
import { RegistrasiPage } from '../pages/registrasi/registrasi';

@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    HomePage,
    AkunPage,
    HelpPage,
    InseminasiPage,
    TabsPage,
    BeritaPage,
    InfoPage,
    KonsultasiPage,
    RecordingPage,
    DaftarInseminatorPage,
    PemesananPage,
    DaftarTernakPage,
    BibitPage,
    LoginPage,
    DetailBeritaPage,
    RegistrasiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HistoryPage,
    HomePage,
    AkunPage,
    HelpPage,
    InseminasiPage,
    TabsPage,
    BeritaPage,
    InfoPage,
    KonsultasiPage,
    RecordingPage,
    DaftarInseminatorPage,
    BibitPage,
    DaftarTernakPage,
    PemesananPage,
    LoginPage,
    DetailBeritaPage,
    RegistrasiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
