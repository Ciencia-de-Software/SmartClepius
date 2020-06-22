import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  contatos = {
    "cpf": "",
    "senha": ""
  };
  api = "http://localhost/api/login.php";

  state$: Observable<object>;

  constructor(private http: HttpClient, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    console.log(this.state$);
  }

  lerContatos() {
    this.http.get<any>(this.api + "?cpf=" + this.contatos.cpf + "&senha=" + this.contatos.senha).subscribe(async dados => {
      this.contatos = dados;
      if (dados != "" && dados != null && dados != undefined){
        this.router.navigate(['/responsavel']);
      } else {
        const alert = await this.alertController.create({
          header: 'Login/Senha incorretos',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  };
}
