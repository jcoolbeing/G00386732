import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NioPageRoutingModule } from './nio-routing.module';

import { NioPage } from './nio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NioPageRoutingModule
  ],
  declarations: [NioPage]
})
export class NioPageModule {}
