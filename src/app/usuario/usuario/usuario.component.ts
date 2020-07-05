import { cargarUsuario } from './../../store/actions/usuario.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Usuario } from 'src/app/models/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  loading: boolean;
  error: any;
  routerParamsSubscription: Subscription;
  usuarioSubscription: Subscription;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.routerParamsSubscription = this.router.params.subscribe(
      ({ id }) => {
        this.store.dispatch(cargarUsuario( {idUsuario: id} ));
      }
    );
    this.loading = false;
    this.usuarioSubscription = this.store.select('userStore').subscribe(
      res => {
        this.usuario = res.user;
        this.loading = res.loading;
        this.error = res.error;
      }
    );
  }

  ngOnDestroy(): void {
    this.routerParamsSubscription.unsubscribe();
    this.usuarioSubscription.unsubscribe();
  }

}
