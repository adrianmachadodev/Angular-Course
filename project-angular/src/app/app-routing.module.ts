import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListadoUsuariosComponent } from './component/dashboard/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './component/dashboard/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: ListadoUsuariosComponent },
      { path: 'usuario', component: UsuarioComponent },
    ],
  },
];

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
