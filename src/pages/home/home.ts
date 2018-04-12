import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';
import { InseminasiPage } from '../inseminasi/inseminasi';
import { BeritaPage } from '../berita terbaru/berita';
import { InfoPage } from '../info ternak/info';
import { KonsultasiPage } from '../konsultasi/konsultasi';
import { RecordingPage } from '../recording/recording';
import { BibitPage } from '../tipe bibit/bibit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  constructor(public navCtrl: NavController,public appCtrl: App) {

  }

  inseminasi() {    
    this.appCtrl.getRootNav().push(InseminasiPage);
  }
  berita() {    
    this.appCtrl.getRootNav().push(BeritaPage);
  }
  info() {    
    this.appCtrl.getRootNav().push(InfoPage);
  }
  konsultasi() {    
    this.appCtrl.getRootNav().push(KonsultasiPage);
  }
  recording() {    
    this.appCtrl.getRootNav().push(RecordingPage);
  }
  bibit() {    
    this.appCtrl.getRootNav().push(BibitPage);
  }

}

