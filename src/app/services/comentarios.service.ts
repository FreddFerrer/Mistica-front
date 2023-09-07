import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private comentariosUrl = 'http://localhost:8080/api/comentarios';

  constructor(private http: HttpClient) {}

  //traer los comentarios
  getComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.comentariosUrl);
  }

  //comentar
  crearComentario(comentario:Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.comentariosUrl, comentario)
  }
}
