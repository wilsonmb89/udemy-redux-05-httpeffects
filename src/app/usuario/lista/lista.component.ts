import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Observable<Usuario[]>;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsers().pipe(map(result => result.data));
  }

}
