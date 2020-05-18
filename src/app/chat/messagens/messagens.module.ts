import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagensPageRoutingModule } from './messagens-routing.module';

import { MessagensPage } from './messagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagensPageRoutingModule
  ],
  declarations: [MessagensPage]
})
export class MessagensPageModule {}
