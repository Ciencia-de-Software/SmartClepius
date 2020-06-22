import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alteracao-de-status',
  templateUrl: './alteracao-de-status.page.html',
  styleUrls: ['./alteracao-de-status.page.scss'],
})
export class AlteracaoDeStatusPage implements OnInit {
  description = '';
  selectOptions = '';

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  resetInputs() {
    this.description = '';
    this.selectOptions = '';
  }

  async handleSubmit() {
    const alert = await this.alertController.create({
      header: 'Dados cadastrados',
      buttons: ['OK']
    });
    await alert.present();
  }

}
