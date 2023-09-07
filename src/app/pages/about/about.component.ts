import { Component, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Comentario } from 'src/app/models/comentario';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  comentarios: Comentario[];

  constructor(private comentariosService: ComentariosService) {}

  ngOnInit() {
    this.comentariosService.getComentarios().subscribe(comentario => {
      this.comentarios = comentario;
    });
  }


}
