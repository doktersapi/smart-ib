import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  goHome: any;
  constructor(public navCtrl: NavController) {
	this.goHome = HomePage;
  }
}
