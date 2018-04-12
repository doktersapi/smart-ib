import { Component } from '@angular/core';
import { NavController,App, ViewController } from 'ionic-angular';
import { LoginPage } from '../Authentication/login';
@Component({
  selector: 'page-akun',
  templateUrl: 'akun.html'
})
export class AkunPage {

  constructor(public navCtrl: NavController, public appCtrl: App) {

  }
  logout(){
  this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
