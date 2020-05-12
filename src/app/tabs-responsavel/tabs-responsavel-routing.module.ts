import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsResponsavelPage } from './tabs-responsavel.page';

const routes: Routes = [
  {
    path: 'tabs-responsavel',
    component: TabsResponsavelPage,
    children: [
      {
        path: 'responsavel',
        loadChildren: () => import('../responsavel/responsavel.module').then(m => m.ResponsavelPageModule)
      },
      {
        path: 'chat-responsavel',
        loadChildren: () => import('../responsavel/chat-responsavel/chat-responsavel.module').then(m => m.ChatResponsavelPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-responsavel/responsavel',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-responsavel/responsavel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsResponsavelPageRoutingModule {}
