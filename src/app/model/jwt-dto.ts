/**
 * La clase JwtDto tiene cuatro propiedades: token, type, nombreUsuario y authorities, todas ellas 
 * son de tipo string o string[]. Esta clase se utiliza para deserializar el token JWT (JSON Web Token) 
 * en un objeto con propiedades útiles para la autenticación y autorización del usuario en la app.
 *
 * @author Dino Ferré
 **/

export class JwtDto {
    token!: string;
    type!: string;
    nombreUsuario!: string;
    authorities!: string[];
}