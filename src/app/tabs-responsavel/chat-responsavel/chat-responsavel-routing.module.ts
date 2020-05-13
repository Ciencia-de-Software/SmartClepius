import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatResponsavelPage } from './chat-responsavel.page';

const routes: Routes = [
  {
    path: '',
    component: ChatResponsavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatResponsavelPageRoutingModule {}
