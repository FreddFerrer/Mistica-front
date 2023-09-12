import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { DocenteService } from 'src/app/services/docente.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit{

  docentes: Usuario[];
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
    this.cargarDocentes();
    this.rol = this.tokenService.getAuthority();
  }

  cargarDocentes(): void {
    this.docenteService.getDocentes().subscribe(
      data => {
        this.docentes = data.map(docente => ({
          ...docente,
          nombreCompleto: `${docente.nombre} ${docente.apellido}`
        }));
      },
      err => {
        console.log(err);
      }
    );
  }

  onCreate(): void {
    const nuevoDocente = new Usuario(this.nombre, this.apellido, this.username, this.email);
    this.docenteService.crearDocente(nuevoDocente).subscribe(
      data => {
        this.router.navigate(['/lista']);
      },
      err => {
        
      }
    );
  }

}
