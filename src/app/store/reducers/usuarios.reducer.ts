import { Usuario } from '../../models/usuario.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as userActions from '../actions/usuarios.actions';

export interface UsuariosState {
  users: Usuario[];
  loader: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loader: false,
  loading: false,
  error: null
};

const _usuariosReducer = createReducer(usuariosInitialState,
  on(userActions.cargarUsuarios, state => ({ ...state, loading: true })),
  on(userActions.cargarUsuariosSuccess, (state, props) => (
    {
      ...state,
      users: props.usuarios,
      loading: false,
      loader: true
    }
    )),
  on(userActions.cargarUsuariosError, (state, props) => (
    {
      ...state,
      error: {
        url: props.payload.url,
        name: props.payload.name,
        message: props.payload.message,
      },
      loading: false,
      loader: false
    }
    ))
);

export function usuariosReducer(state, action: Action): any {
  return _usuariosReducer(state, action);
}
