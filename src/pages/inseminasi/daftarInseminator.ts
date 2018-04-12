import { Component } from '@angular/core';
import { PemesananPage } from '../inseminasi/pemesanan';
@Component({
  
  templateUrl: 'daftarInseminator.html'
})
export class DaftarInseminatorPage {

  pilih: any;
  constructor() {
	this.pilih = PemesananPage;
  }

}