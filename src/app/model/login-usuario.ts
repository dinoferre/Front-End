/**
 * La clase LoginUsuario tiene dos propiedades: nombreUsuario y password, que representan el nombre 
 * de usuario y la contraseña de un usuario para iniciar sesión en la app. El constructor de la clase 
 * acepta dos argumentos para inicializar estas propiedades.
 *
 * @author Dino Ferré
 **/

export class LoginUsuario {
    nombreUsuario: string;
    password: string;

    constructor(nombreUsuario: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}