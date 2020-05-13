import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsResponsavelPageRoutingModule } from './tabs-responsavel-routing.module';

import { TabsResponsavelPage } from './tabs-responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsResponsavelPageRoutingModule
  ],
  declarations: [TabsResponsavelPage]
})
export class TabsResponsavelPageModule {}
