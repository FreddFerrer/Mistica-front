import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Comentario } from 'src/app/models/comentario';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  comentarios: Comentario[];

  constructor(private comentarioService: ComentarioService) {}

  ngOnInit() {
    this.comentarioService.getComentarios().subscribe(comentario => {
      this.comentarios = comentario;
    });
  }


}
