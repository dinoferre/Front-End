/**
 * La clase "NuevoUsuario" tiene las siguientes propiedades: "nombre", "nombreUsuario", "email", 
 * "password" y "authorities". Todas las propiedades son de tipo "string", excepto "authorities" 
 * que es un array de strings.
 *
 * @author Dino Ferré
 **/

export class NuevoUsuario {
    nombre!: string;
    nombreUsuario!: string
    email!: string;
    password!: string;
    authorities!: string[];
}