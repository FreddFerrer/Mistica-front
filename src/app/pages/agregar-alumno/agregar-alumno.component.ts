import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit{

  rol: string;
  isLogged = false;


  constructor(private tokenService: TokenService){}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.rol = this.tokenService.getAuthority()
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
} 
