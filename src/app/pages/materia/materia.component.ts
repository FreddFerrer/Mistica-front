import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { TokenService } from '../../services/token.service';
import { MateriaService } from 'src/app/services/materia.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit{

  materias: Materia[];
  docentes: Usuario[];
  rol: string

  constructor(private tokenService: TokenService, private materiaService: MateriaService){

  }

  agregarMateria(){}


  ngOnInit() {
    this.cargarMaterias();
    this.rol = this.tokenService.getAuthority();
  }

  cargarMaterias(): void {
    this.materiaService.getMaterias().subscribe(
      data => {
        this.materias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
