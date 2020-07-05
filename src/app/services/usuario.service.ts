import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetUsersRes, GetUserRes } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly usuarioURL = 'https://reqres.in/api';

  constructor(
    private http: HttpClient
  ) { }

  private get<T>(endpoint: string, options?: any): Observable<T> {
    const headers = !!options ? new HttpHeaders(options) : null;
    return this.http.get<T>(endpoint, { headers });
  }

  public getUsers(page?: number): Observable<GetUsersRes> {
    page = !!page ? page : 1;
    const getUsersURL = `${this.usuarioURL}/users/?page=${page}&per_page=4&delay=2`;
    return this.get<GetUsersRes>(getUsersURL).pipe();
  }

  public getUser(userId: string): Observable<GetUserRes> {
    const getUserURL = `${this.usuarioURL}/users/${userId}`;
    return this.get<GetUserRes>(getUserURL);
  }
}
