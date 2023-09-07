export class Comentario {
    id: number;
  nombre: string;
  contenido: string;
  fecha: string;

  constructor(id: number, nombre: string, contenido: string, fecha: string) {
    this.id = id;
    this.nombre = nombre;
    this.contenido = contenido;
    this.fecha = fecha;
  }
}
