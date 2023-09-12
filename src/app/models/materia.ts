import { Alumno } from "./alumno";
import { Usuario } from "./usuario";

export class Materia {
    id: number;
    nombreMateria: string;
    docente: Usuario | null; 
    anoEscolar: string;
    alumnos: Alumno[];

    constructor(nombreMateria: string, anoEscolar: string) {
        this.nombreMateria = nombreMateria;
        this.anoEscolar = anoEscolar;
        this.docente = null;
        this.alumnos = [];
    }
}
