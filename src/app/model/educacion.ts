/**
 * Esta es una clase llamada "Educacion" que tiene tres atributos: "id", "nombreE" y "descripcionE". 
 * El atributo "id" es opcional y es un número. Los otros dos atributos son cadenas de texto. 
 * También tiene un constructor que recibe dos cadenas de texto como parámetros y las asigna a los 
 * atributos "nombreE" y "descripcionE".
 *
 * @author Dino Ferré
 **/

export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
}