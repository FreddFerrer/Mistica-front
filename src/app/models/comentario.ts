export class Comentario {
    id: number;
  nombre: string;
  contenido: string;
  fecha: string;

  constructor(nombre: string, contenido: string) {
    
    this.nombre = nombre;
    this.contenido = contenido;
    
  }
}
