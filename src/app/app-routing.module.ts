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
    path: 'equipe-hospitalar',
    loadChildren: () => import('./equipe-hospitalar/equipe-hospitalar.module').then( m => m.EquipeHospitalarPageModule)
  },/*
  {
    path: 'responsavel',
    loadChildren: () => import('./tabs-responsavel/responsavel/responsavel.module').then( m => m.ResponsavelPageModule)
  },*/
  {
    path: 'tabs-responsavel',
    loadChildren: () => import('./tabs-responsavel/tabs-responsavel.module').then( m => m.TabsResponsavelPageModule)
  },/*
  {
    path: 'chat-responsavel',
    loadChildren: () => import('./tabs-responsavel/responsavel/chat-responsavel/chat-responsavel.module').then( m => m.ChatResponsavelPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
