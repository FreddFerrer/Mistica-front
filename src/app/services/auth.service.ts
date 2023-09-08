import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/api/auth'

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: Register): Observable<any> {
    return this.httpClient.post<any>(this.url + '/signup', nuevoUsuario);
  }

  public login(loginUsuario: Login): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.url + '/signin', loginUsuario);
  }
}
