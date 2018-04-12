import { Component } from '@angular/core';
import { NavController, App, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-pemesanan',
  templateUrl: 'pemesanan.html'
})
export class PemesananPage {

  constructor(public navCtrl: NavController,public appCtrl: App, public alertCtrl: AlertController) {

  }
  pesan() {    
    this.appCtrl.getRootNav().push(TabsPage);
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Konfirmasi Pemesanan',
      message: 'Apakah Anda yakin ingin memanggil Inseminator?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
            this.showMassage();
          }
        }
      ]
    });
    confirm.present();

  }
  showMassage(){
  let confirm = this.alertCtrl.create({
      message: 'Terima Kasih. Silahkan Tunggu Inseminator datang ke tempat anda',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Agree clicked');
            this.appCtrl.getRootNav().push(TabsPage);
          }
        }
      ]
    });
    confirm.present();

  }
}