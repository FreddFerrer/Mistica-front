import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materia } from 'src/app/models/materia';
import { Usuario } from 'src/app/models/usuario';
import { DocenteService } from 'src/app/services/docente.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit{


  nombre: string;
  anoEscolar: string;
  

  constructor(private tokenService: TokenService, 
    private materiaService: MateriaService,
    private router: Router) {
    
  }

  ngOnInit() {
  }


  insertar(nuevaMateria: Materia){
    this.materiaService.crearMateria(nuevaMateria).subscribe(
      (materiaCreada) => {
        console.log('Materia creada:', materiaCreada);
        // Puedes hacer aquí cualquier acción adicional después de crear el comentario, si es necesario.
        this.router.navigate(['/index'])
      },
      (error) => {
        console.error('Error al crear la materia:', error);
        // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario.
      })
  }

}

