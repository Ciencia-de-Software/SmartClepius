import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = '';
  password = '';

  state$: Observable<object>;

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    console.log(this.state$);
  }

  async handleLogin() {
    if (this.login === 'user' && this.password === 'user') {
      this.router.navigate(['/responsavel']);
    } else if (this.login === 'admin' && this.password === 'root') {
      this.router.navigate(['/equipe-medica']);
    } else {
      const alert = await this.alertController.create({
        header: 'Login/Senha incorretos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
