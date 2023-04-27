/**
 * La clase persona tiene cuatro propiedades: id (opcional y de tipo número), nombre (de tipo string), 
 * apellido (de tipo string) e imagen (de tipo string). También tiene un constructor que acepta tres 
 * parámetros (nombre, apellido e imagen) y los asigna a las propiedades correspondientes.
 *
 * @author Dino Ferré
 **/

export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  imagen: string;

  constructor(nombre: string, apellido: string, imagen: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.imagen = imagen;
  }
}