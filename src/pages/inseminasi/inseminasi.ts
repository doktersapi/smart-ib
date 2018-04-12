import { Component } from '@angular/core';
import { DaftarInseminatorPage } from '../inseminasi/daftarInseminator';
import { NavController,App } from 'ionic-angular';
@Component({
  selector: 'page-inseminasi',
  templateUrl: 'inseminasi.html'
})
export class InseminasiPage {

  constructor(public navCtrl: NavController, public appCtrl: App) {
	
  }
  pilihInseminator(){
  this.appCtrl.getRootNav().push(DaftarInseminatorPage);
  }

}