import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlteracaoDeStatusPage } from './alteracao-de-status.page';

const routes: Routes = [
  {
    path: '',
    component: AlteracaoDeStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlteracaoDeStatusPageRoutingModule {}
