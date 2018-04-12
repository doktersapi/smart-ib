import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';
import { HomePage } from '../home/home';
import { AkunPage } from '../akun/akun';
import { HelpPage } from '../help/help';

@Component({
  templateUrl: 'tabs.html',
  selector:'page-tabs'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoryPage;
  tab3Root = HelpPage;
  tab4Root = AkunPage

  constructor() {

  }
}
