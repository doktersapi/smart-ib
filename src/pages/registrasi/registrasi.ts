import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../Authentication/login';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-registrasi',
  templateUrl: 'registrasi.html'
})
export class RegistrasiPage {

  constructor(public navCtrl: NavController, public appCtrl: App) {

  }
  daftar(){
  	this.navCtrl.setRoot(TabsPage)
  }
  login(){
  	this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
