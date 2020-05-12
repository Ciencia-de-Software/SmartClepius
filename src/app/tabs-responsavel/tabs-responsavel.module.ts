import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsResponsavelPageRoutingModule } from './tabs-responsavel-routing.module';

import { TabsResponsavelPage } from './tabs-responsavel.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsResponsavelPageRoutingModule
  ],
  declarations: [TabsResponsavelPage]
})
export class TabsResponsavelPageModule {}
