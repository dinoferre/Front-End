/**
 * Esta es la definición de una clase llamada Experiencia, que tiene las siguientes propiedades:
 * id es un número opcional, nombreE es una cadena de texto que representa el nombre de la experiencia.
 * descripcionE es una cadena de texto que representa la descripción de la experiencia.
 * Además, la clase tiene un constructor que recibe dos parámetros: nombreE y descripcionE, y asigna 
 * sus valores a las propiedades correspondientes de la clase.
 *
 * @author Dino Ferré
 **/

export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
}