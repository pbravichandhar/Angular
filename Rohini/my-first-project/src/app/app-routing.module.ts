import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('../app/layout/layout/layout.module').then(m => m.LayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
