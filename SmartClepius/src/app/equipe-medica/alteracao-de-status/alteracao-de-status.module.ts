import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlteracaoDeStatusPageRoutingModule } from './alteracao-de-status-routing.module';

import { AlteracaoDeStatusPage } from './alteracao-de-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlteracaoDeStatusPageRoutingModule
  ],
  declarations: [AlteracaoDeStatusPage]
})
export class AlteracaoDeStatusPageModule {}
