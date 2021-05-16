import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeslaPageRoutingModule } from './tesla-routing.module';

import { TeslaPage } from './tesla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeslaPageRoutingModule
  ],
  declarations: [TeslaPage]
})
export class TeslaPageModule {

}
