import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-equipe-hospitalar',
  templateUrl: './equipe-hospitalar.page.html',
  styleUrls: ['./equipe-hospitalar.page.scss'],
})
export class EquipeHospitalarPage {

  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
