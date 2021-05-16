import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeslaPage } from './tesla.page';

const routes: Routes = [
  {
    path: '',
    component: TeslaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeslaPageRoutingModule {}
