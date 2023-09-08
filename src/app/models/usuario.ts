import { RolEnum } from "./rol-enum";

export class Usuario {
    id: number;
  username: string;
  password: string;
  email: string;
  rol: string; 
  nombre: string;
  apellido: string;

  constructor(
    username: string,
    password: string,
    email: string,
    rol: string, 
    nombre: string,
    apellido: string
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.rol = rol;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
