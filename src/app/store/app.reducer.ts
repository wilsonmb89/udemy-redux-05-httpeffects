import { ActionReducerMap } from '@ngrx/store';
import * as usuariosReducer from './reducers/usuarios.reducer';
import * as usuarioReducer from './reducers/usuario.reducer';

export interface AppState {
  usersStore: usuariosReducer.UsuariosState;
  userStore: usuarioReducer.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usersStore: usuariosReducer.usuariosReducer,
  userStore: usuarioReducer.usuarioReducer,
};
