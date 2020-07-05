import * as usuariosActions from './../actions/usuarios.actions';
import { UsuarioService } from './../../services/usuario.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(
        () => this.usuarioService.getUsers().pipe(
          map(res => usuariosActions.cargarUsuariosSuccess({ usuarios: res.data })),
          catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err})))
        )
      )
    )
  );
}
