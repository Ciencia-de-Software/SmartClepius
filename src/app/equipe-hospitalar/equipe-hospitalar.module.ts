import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipeHospitalarPageRoutingModule } from './equipe-hospitalar-routing.module';

import { EquipeHospitalarPage } from './equipe-hospitalar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipeHospitalarPageRoutingModule
  ],
  declarations: [EquipeHospitalarPage]
})
export class EquipeHospitalarPageModule {}
