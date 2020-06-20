import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import isCPF from '../../../util/isCPF';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {
  cpf = '';

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async handleForgotPass() {
    if (!isCPF(this.cpf)) {
      const alert1 = await this.alertController.create({
        header: 'CPF Inválido',
        buttons: ['OK']
      });
      return await alert1.present();
    } else {
      const alert2 = await this.alertController.create({
        header: 'Sua senha foi enviada para seu e-mail!',
        buttons: ['OK']
      });
      return await alert2.present();
    }
  }
}
