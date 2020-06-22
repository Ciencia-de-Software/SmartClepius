import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { async } from '@angular/core/testing';

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

  constructor(public alertController: AlertController, private router: Router, private http:HttpClient, private navCtrl:NavController) { }

  ngOnInit() {}

  handleRegister() {
    this.http.post<any>(this.api+"inclusao.php", this.contato).subscribe( async dados => {
      if (this.contato.nome === '' || this.contato.rg === '' || this.contato.cpf === '' || this.contato.endereco === '' || this.contato.senha === '' || this.contato.telefone === '' || this.contato.email === '') {
        const alert2 = await this.alertController.create({
          header: 'Informações inválidas',
          buttons: ['OK']
        });
        await alert2.present();
        return false;
      } else {
        const alert = await this.alertController.create({
          header: 'Cadastro realizado com sucesso!',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigate(['/home']);
      }
      this.navCtrl.navigateBack('/home');
    });
  }
}