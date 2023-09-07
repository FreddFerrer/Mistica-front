import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComentariosInterface } from '../interfaces/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  cargando = true;
  comentarios: ComentariosInterface[] = [];

  constructor(private http: HttpClient) {
    console.log('comentarios cargadossss')
    this.cargarComentarios()
   }

   private cargarComentarios(){
    return new Promise( ( resolve, reject ) => {
      this.http.get<any>('http://localhost:8080/api/comentarios')
      .subscribe( (resp: ComentariosInterface[]) => {
        this.comentarios = resp;
        this.cargando = false;
        console.log('funciona')
        console.log(this.comentarios)
      });
    });
   }
}
