import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  rol: string;
  isLogged = false;
  rolTexto: string;
  nombreRol: string;

  

  constructor(private tokenService: TokenService, private router: Router) { }

  

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.rol = this.tokenService.getAuthority()
      this.rolTexto = this.convertirRolATexto(this.rol);
      this.nombreRol = this.tokenService.getUserName();
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/home']);
  }

  private convertirRolATexto(rol: string): string{
    switch (rol) {
      case 'ROLE_AUTORIDAD':
        return 'Autoridad';
      case 'ROLE_DOCENTE':
        return 'Docente';  
      case 'ROLE_PADRE':
        return 'Padre';
      case 'ROLE_ESTUDIANTE':
        return 'Estudiante';
      default:
        return '';
    }
  }

}
