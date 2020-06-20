import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

/*import isCPF from '../../../util/isCPF';*/

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  id:string;
  api="http://localhost/api/";
  contato = {
    "id": 0,
    "nome": "",
    "rg": "",
    "cpf": "",
    "endereco": "",
    "telefone": "",
    "email": "",
    "senha": ""
  };
  password = this.contato.senha;
  passwordTest = '';

  constructor(public alertController: AlertController, private router: Router, private http:HttpClient, private navCtrl:NavController) { }

  ngOnInit() {}

  async handleRegister() {
    this.http.post<any>(this.api+"inclusao.php", this.contato).subscribe( dados => {
      this.navCtrl.navigateBack('/home');
    });

    if (this.password !== this.passwordTest) {
      const alert2 = await this.alertController.create({
        header: 'Senha inválida',
        buttons: ['OK']
      });
      await alert2.present();
      return false;
    }
    /*if (!isCPF(this.contato.cpf)) {
      const alert2 = await this.alertController.create({
        header: 'CPF inválido',
        buttons: ['OK']
      });
      await alert2.present();
      return false;
    }*/
    if (this.contato.nome === '' || this.contato.rg === '' || this.contato.cpf === '' || this.contato.endereco === '' || this.password === '' || this.contato.telefone === '' || this.contato.email === '') {
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