import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagensPage } from './messagens.page';

const routes: Routes = [
  {
    path: '',
    component: MessagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagensPageRoutingModule {}
