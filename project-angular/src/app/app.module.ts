import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { componenteComponents } from './components/componente/componente.components';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CardComponent } from './component/dashboard/card/card.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ListadoUsuariosComponent } from './component/dashboard/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './component/dashboard/usuario/usuario.component';
import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    componenteComponents,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
    InicioComponent,
    ListadoUsuariosComponent,
    UsuarioComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
