import { Usuario } from '../../models/usuario.model';
import { createAction, props } from '@ngrx/store';

export const cargarUsuario = createAction('[Usuario] Cargar Usuario', props<{ idUsuario: string }>());
export const cargarUsuarioSuccess = createAction('[Usuario] Cargar Usuario Success', props<{ usuario: Usuario }>());
export const cargarUsuarioError = createAction('[Usuario] Cargar Usuario Error', props<{ payload: any }>());
