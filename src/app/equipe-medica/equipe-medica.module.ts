import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipeMedicaPageRoutingModule } from './equipe-medica-routing.module';

import { EquipeMedicaPage } from './equipe-medica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipeMedicaPageRoutingModule
  ],
  declarations: [EquipeMedicaPage]
})
export class EquipeMedicaPageModule {}
