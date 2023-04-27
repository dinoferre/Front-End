/**
 * La clase AuthService es un servicio que se proporciona en la raíz de la app. Tiene una 
 * propiedad authURL que almacena la URL del servidor de autenticación. El constructor inyecta 
 * HttpClient para permitir hacer peticiones HTTP.
 * El servicio tiene dos métodos públicos: 
 * -nuevo que hace una petición POST al endpoint /auth/nuevo con los datos del nuevo usuario 
 * proporcionados en un objeto NuevoUsuario.
 * -login que hace una petición POST al endpoint /auth/login con los datos del usuario que desea 
 * hacer login proporcionados en un objeto LoginUsuario. Retorna un objeto JwtDto que contiene el 
 * token de autenticación, el tipo de token, el nombre de usuario y los roles asignados. 
 * Ambos métodos retornan un objeto Observable.
 *
 * @author Dino Ferré
 **/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authURL = window.location.href.includes('localhost') ? 'http://localhost:8080/auth/' : 'https://portfolio-backend-tqnw.onrender.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}