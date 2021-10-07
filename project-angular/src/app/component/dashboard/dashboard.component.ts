import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  listaUsuario: any;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.listaUsuario = data.data;
    });
    // this.t = true;
  }

  ngOnInit(): void {}

  /* toggle(): void {
    this.t = !this.t;
  } */

  /* onChange(evento: string): void {
    this.usuarioService.modificarTexto(this.texto);
  } */
}
