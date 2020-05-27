import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = '';
  password = '';

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async handleLogin() {
    if (this.login === 'admin' && this.password === 'root') {
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
