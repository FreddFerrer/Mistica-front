import { Component } from '@angular/core';
import { ComentarioService } from './services/comentario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'educar';

  constructor(public comentariosService: ComentarioService){}
}
