import { Component } from '@angular/core';
import { DetailBeritaPage } from '../berita terbaru/detailBerita';
import { NavController, App } from 'ionic-angular';
@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html'
})
export class BeritaPage {

  constructor(public appCtrl: App) {

  }
  read() {    
    this.appCtrl.getRootNav().push(DetailBeritaPage);
  }
}