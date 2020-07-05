import { createReducer, on, Action } from '@ngrx/store';
import * as usuarioActions from '../actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
  id: string;
  user: Usuario;
  loader: boolean;
  loading: boolean;
  error: any;
}

export const initialState: UsuarioState = {
  id: null,
  user: null,
  loader: false,
  loading: false,
  error: false
};

const _usuarioReducer = createReducer(initialState,

  on(usuarioActions.cargarUsuario, (state, props) => ({ ...state, id: props.idUsuario, loading: true })),
  on(usuarioActions.cargarUsuarioSuccess, (state, props) => (
    {
      ...state,
      user: {...props.usuario},
      loading: false,
      loader: true,
      error: null
    })),
  on(usuarioActions.cargarUsuarioError, (state, props) => (
    {
      ...state,
      user: null,
      error: {
        url: props.payload.url,
        name: props.payload.name,
        message: props.payload.message,
      },
      loading: false,
      loader: false
    })),

);

export function usuarioReducer(state, action: Action): any {
  return _usuarioReducer(state, action);
}
