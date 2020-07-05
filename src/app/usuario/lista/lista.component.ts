import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuarios } from 'src/app/store/actions/usuarios.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: Usuario[];
  loading: boolean;
  error: any;
  usuariosSubscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loading = false;
    this.store.dispatch(cargarUsuarios());
    this.usuariosSubscription = this.store.select('usersStore').subscribe(
      resData => {
        this.usuarios = resData.users;
        this.loading = resData.loading;
        this.error = resData.error;
      }
    );
  }

  ngOnDestroy(): void {
    this.usuariosSubscription.unsubscribe();
  }
}
