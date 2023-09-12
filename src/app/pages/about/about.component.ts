import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Comentario } from 'src/app/models/comentario';
import { Router } from '@angular/router';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  comentarios: Comentario[];
  nombre: string;
  contenido: string;

  constructor(
    private comentarioService: ComentarioService,
    private router: Router,
    
  ) {}

  insertar(nuevoComentario: Comentario) {
    this.comentarioService.crearComentario(nuevoComentario).subscribe(
      (comentarioCreado) => {
        console.log('Comentario creado:', comentarioCreado);
        // Puedes hacer aquí cualquier acción adicional después de crear el comentario, si es necesario.
        this.router.navigate(['/home'])
      },
      (error) => {
        console.error('Error al crear comentario:', error);
        // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario.
      }
    );
  }

  ngOnInit() {
    this.comentarioService.getComentarios().subscribe(comentario => {
      this.comentarios = comentario;
    });
  }
}
