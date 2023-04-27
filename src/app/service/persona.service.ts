/**
 * El código muestra un servicio llamado PersonaService, que es un decorador @Injectable con un 
 * objeto URL que contiene la URL de la API para obtener información de la persona en función del 
 * entorno en el que se esté ejecutando la app. El servicio utiliza la clase HttpClient para 
 * realizar una solicitud GET a la API con el método getPersona(). La respuesta esperada es un 
 * objeto de tipo persona que contiene información sobre la persona.
 *
 * @author Dino Ferré
 **/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  URL = window.location.href.includes('localhost') ? 'http://localhost:8080/personas/' : 'https://portfolio-backend-tqnw.onrender.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
}