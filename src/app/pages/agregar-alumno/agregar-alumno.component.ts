import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit{

  rol: string;
  isLogged = false;
  nombre: string;
  apellido: string;
  email: string;


  constructor(private tokenService: TokenService, private alumnoService: AlumnoService,
    private router: Router){}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.rol = this.tokenService.getAuthority()
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  onCreate(): void {
    const nuevoAlumno = new Alumno(this.nombre, this.apellido, this.email);
    this.alumnoService.crearAlumno(nuevoAlumno)
    console.log(nuevoAlumno)
  }

  insertar(nuevoAlumno: Alumno){
    this.alumnoService.crearAlumno(nuevoAlumno).subscribe(
      (alumnoCreado) => {
        console.log('Alumno creado:', alumnoCreado);
        // Puedes hacer aquí cualquier acción adicional después de crear el comentario, si es necesario.
        this.router.navigate(['/alumnos'])
      },
      (error) => {
        console.error('Error al crear el alumno:', error);
        // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario.
      })
  }
  
} 
