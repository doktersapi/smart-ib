import { Component } from '@angular/core';
import { DaftarTernakPage } from '../recording/daftarTernak';
@Component({
  selector: 'page-recording',
  templateUrl: 'recording.html'
})
export class RecordingPage {

dataternak: any;
  constructor() {
	this.dataternak = DaftarTernakPage;
  }

}