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

  isLogged = false;
  rol: string;

  nombreMateria: string;
  anoEscolar: string;
  horarioEntrada: string;
  horarioSalida: string;
  turno: string;
  

  constructor(private tokenService: TokenService, 
    private materiaService: MateriaService,
    private router: Router) {
    
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.rol = this.tokenService.getAuthority()
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const nuevaMateria = new Materia(this.nombreMateria, this.anoEscolar, 
      this.horarioEntrada, this.horarioSalida,
      this.turno);
    this.materiaService.crearMateria(nuevaMateria)
    console.log(nuevaMateria)
  }


  insertar(nuevaMateria: Materia){
    
    this.materiaService.crearMateria(nuevaMateria).subscribe(
      (materiaCreada) => {
        console.log('Materia creada:', materiaCreada);
        
        this.router.navigate(['/materias'])
      },
      (error) => {
        console.error('Error al crear la materia:', error);
        // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario.
      })
    }

  }

