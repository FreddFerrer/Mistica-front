import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit{

  rol: string;
  alumnos: Alumno[];

  constructor(private tokenService: TokenService, private alumnoService: AlumnoService) {
    
  }

  ngOnInit() {
    this.cargarAlumnos();
    this.rol = this.tokenService.getAuthority();
  }

  cargarAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe(
      data => {
        this.alumnos = data.map(alumno => ({
          ...alumno,
          nombreCompleto: `${alumno.nombre} ${alumno.apellido}`
        }));
      },
      err => {
        console.log(err);
      }
    );
  }


}
