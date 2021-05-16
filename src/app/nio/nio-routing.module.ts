import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NioPage } from './nio.page';

const routes: Routes = [
  {
    path: '',
    component: NioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NioPageRoutingModule {}
