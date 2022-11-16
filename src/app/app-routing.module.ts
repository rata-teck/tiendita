import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./paginas/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'cli/:token',
    loadChildren: () => import('./paginas/cli/cli.module').then( m => m.CliPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
