import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatResponsavelPageRoutingModule } from './chat-responsavel-routing.module';

import { ChatResponsavelPage } from './chat-responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatResponsavelPageRoutingModule
  ],
  declarations: [ChatResponsavelPage]
})
export class ChatResponsavelPageModule {}
