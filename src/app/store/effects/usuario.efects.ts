import { mergeMap, map, catchError } from 'rxjs/operators';
import * as usuarioActions from './../actions/usuario.actions';
import { UsuarioService } from '../../services/usuario.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffect {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuario = createEffect(
    () => this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      mergeMap(
        action => this.usuarioService.getUser(action.idUsuario).pipe(
          map(resUser => usuarioActions.cargarUsuarioSuccess({ usuario: resUser.data })),
          catchError(err => of(usuarioActions.cargarUsuarioError({ payload: err })))
        )
      )
    )
  );
}
