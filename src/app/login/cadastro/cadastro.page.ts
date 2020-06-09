import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import isCPF from '../../../util/isCPF';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  name = '';
  rg = '';
  cpf = '';
  birthday = 0;
  email = '';
  password = '';
  passwordTest = '';

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async handleRegister() {
    if (this.password !== this.passwordTest) {
      const alert2 = await this.alertController.create({
        header: 'Senha inválida',
        buttons: ['OK']
      });
      await alert2.present();
      return false;
    }
    if (!isCPF(this.cpf)) {
      const alert2 = await this.alertController.create({
        header: 'CPF inválido',
        buttons: ['OK']
      });
      await alert2.present();
      return false;
    }
    if (this.email === '' || this.name === '' || this.password === '' || this.rg === '') {
      const alert2 = await this.alertController.create({
        header: 'Informações inválidas',
        buttons: ['OK']
      });
      await alert2.present();
      return false;
    }
    const alert = await this.alertController.create({
      header: 'Cadastro realizado com sucesso!',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['/home']);
  }

}
