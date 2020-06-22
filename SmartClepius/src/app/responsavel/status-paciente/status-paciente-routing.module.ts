import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusPacientePage } from './status-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: StatusPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusPacientePageRoutingModule {}
