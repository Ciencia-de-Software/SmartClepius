import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipeMedicaPage } from './equipe-medica.page';

const routes: Routes = [
  {
    path: '',
    component: EquipeMedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipeMedicaPageRoutingModule {}
