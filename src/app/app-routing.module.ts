import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { RegisterComponent } from './auth/register/register.component';
import { AgregarMateriaComponent } from './pages/agregar-materia/agregar-materia.component';
import { EditarMateriaComponent } from './pages/editar-materia/editar-materia.component';

import { AgregarAlumnoComponent } from './pages/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './pages/editar-alumno/editar-alumno.component';
import { IndexComponent } from './pages/index/index.component';
import { DocenteComponent } from './pages/docente/docente.component';
import { AgregarDocenteComponent } from './pages/agregar-docente/agregar-docente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'materias', component: MateriaComponent },
  { path: 'materias/agregar', component: AgregarMateriaComponent },
  { path: 'materias/editar/:id', component: EditarMateriaComponent },
  { path: 'alumnos', component: AlumnoComponent },

  { path: 'alumnos/agregar', component: AgregarAlumnoComponent },
  { path: 'alumnos/editar/:id', component: EditarAlumnoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'docentes', component: DocenteComponent },
  { path: 'docentes/agregar', component: AgregarDocenteComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
