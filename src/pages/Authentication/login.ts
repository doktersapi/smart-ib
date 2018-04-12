import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegistrasiPage } from '../registrasi/registrasi';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email;
  public password;
  loginError: string;


  constructor(public navCtrl: NavController, public appCtrl: App,	public auth: AuthService,) {

  }
  login(){
 
		let credentials = {
			email: this.email,
			password: this.password
		};
    this.auth.signInWithEmail(credentials)
    .then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
  }
  registrasi(){
  	this.appCtrl.getRootNav().setRoot(RegistrasiPage);
  }
}
