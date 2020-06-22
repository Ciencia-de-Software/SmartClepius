import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {
  contatos = {
    "cpf": ""
  };
  api = "http://localhost/api/esqueci-senha.php";

  state$: Observable<object>;

  constructor(private http: HttpClient, private router: Router, public alertController: AlertController) {}

  ngOnInit() {
    console.log(this.state$);
  }

  handleForgotPass() {
    this.http.get<any>(this.api + "?cpf=" + this.contatos.cpf).subscribe(async dados => {
      this.contatos = dados;
      if (dados != "" && dados != null && dados != undefined){
        this.router.navigate(['/nova-senha']);
      } else {
        const alert = await this.alertController.create({
          header: 'CPF Inválido',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}