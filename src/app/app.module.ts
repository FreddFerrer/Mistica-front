import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './pages/index/index.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { AgregarMateriaComponent } from './pages/agregar-materia/agregar-materia.component';
import { EditarMateriaComponent } from './pages/editar-materia/editar-materia.component';
import { DetalleAlumnoComponent } from './pages/detalle-alumno/detalle-alumno.component';
import { AgregarAlumnoComponent } from './pages/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './pages/editar-alumno/editar-alumno.component';
import { MenuComponent } from './pages/menu/menu.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { DocenteComponent } from './pages/docente/docente.component';
import { AgregarDocenteComponent } from './pages/agregar-docente/agregar-docente.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    MateriaComponent,
    AlumnoComponent,
    AgregarMateriaComponent,
    EditarMateriaComponent,
    DetalleAlumnoComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    MenuComponent,
    DocenteComponent,
    AgregarDocenteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
