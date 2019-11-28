import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'salario', loadChildren: './salario/salario.module#SalarioPageModule' },
  { path: 'dolar', loadChildren: './dolar/dolar.module#DolarPageModule' },
  { path: 'descontos', loadChildren: './descontos/descontos.module#DescontosPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
