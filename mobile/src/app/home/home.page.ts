import { Component } from '@angular/core';

import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  type = '';

  constructor() {}

  setType(type: string) {
    this.type = type;
  }
}
