import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { TokenService } from '../../services/token.service';
import { MateriaService } from 'src/app/services/materia.service';
import { Usuario } from 'src/app/models/usuario';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit{

  materias: Materia[];
  docentes: Usuario[];
  rol: string

  nombreMateria: string;
  anoEscolar: string;

  constructor(private tokenService: TokenService, 
    private materiaService: MateriaService,
    private router: Router){

  }

  


  ngOnInit() {
    this.cargarMaterias();
    this.rol = this.tokenService.getAuthority();
  }

  cargarMaterias(): void {
    this.materiaService.getMaterias().subscribe(
      data => {
        this.materias = data;
        console.log(this.materias)
      },
      err => {
        console.log(err);
      }
    );
  }

  hacerAlgoConMateria(materia: Materia) {
    console.log("Haz hecho clic en la materia:", materia);
  }

}
