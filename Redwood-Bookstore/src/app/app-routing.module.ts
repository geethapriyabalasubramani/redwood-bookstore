import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: "Home",
    loadChildren: () => import('./modules/redwood-pos/redwood-pos.module').then(m => m.RedwoodPosModule)
  },
  {
    path: "Dashboard",
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "pos",
    loadChildren: () => import('./modules/pos/pos.module').then(m => m.PosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
