import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./login/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./login/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  },
  {
    path: 'responsavel',
    loadChildren: () => import('./responsavel/responsavel.module').then( m => m.ResponsavelPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'equipe-medica',
    loadChildren: () => import('./equipe-medica/equipe-medica.module').then( m => m.EquipeMedicaPageModule)
  },
  {
    path: 'messagens',
    loadChildren: () => import('./chat/messagens/messagens.module').then( m => m.MessagensPageModule)
  },
  {
    path: 'alteracao-de-status',
    loadChildren: () => import('./equipe-medica/alteracao-de-status/alteracao-de-status.module').then( m => m.AlteracaoDeStatusPageModule)
  },
  {
    path: 'status-paciente',
    loadChildren: () => import('./responsavel/status-paciente/status-paciente.module').then( m => m.StatusPacientePageModule)
  },
  {
    path: 'nova-senha',
    loadChildren: () => import('./login/nova-senha/nova-senha.module').then( m => m.NovaSenhaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
