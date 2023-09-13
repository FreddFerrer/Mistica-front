import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { DocenteService } from 'src/app/services/docente.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent implements OnInit{

  isLogged = false;
  rol: string;
  

  nombre: string;
  apellido: string;
  email: string;
  username: string;

  constructor(private tokenService: TokenService, 
    private docenteService: DocenteService,
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
    const nuevoDocente = new Usuario(this.nombre, this.apellido, this.username, this.email);
    this.docenteService.crearDocente(nuevoDocente)
    console.log(nuevoDocente)
  }

  insertar(nuevoDocente: Usuario){
    this.docenteService.crearDocente(nuevoDocente).subscribe(
      (docenteCreado) => {
        console.log('Docente creado:', docenteCreado);
        // Puedes hacer aquí cualquier acción adicional después de crear el comentario, si es necesario.
        this.router.navigate(['/index'])
      },
      (error) => {
        console.error('Error al crear el docente:', error);
        // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario.
      })
  }

}


