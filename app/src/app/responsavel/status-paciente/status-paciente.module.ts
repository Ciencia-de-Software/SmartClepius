import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusPacientePageRoutingModule } from './status-paciente-routing.module';

import { StatusPacientePage } from './status-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPacientePageRoutingModule
  ],
  declarations: [StatusPacientePage]
})
export class StatusPacientePageModule {}
