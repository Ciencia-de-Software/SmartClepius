import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipeHospitalarPage } from './equipe-hospitalar.page';

const routes: Routes = [
  {
    path: '',
    component: EquipeHospitalarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipeHospitalarPageRoutingModule {}
