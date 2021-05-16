import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tesla',
    loadChildren: () => import('./tesla/tesla.module').then( m => m.TeslaPageModule)
  },
  {
    path: 'nio',
    loadChildren: () => import('./nio/nio.module').then( m => m.NioPageModule)
  },
  {
    path: 'att',
    loadChildren: () => import('./att/att.module').then( m => m.AttPageModule)
  },
  {
    path: 'delta',
    loadChildren: () => import('./delta/delta.module').then( m => m.DeltaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
