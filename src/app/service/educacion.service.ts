/**
 * La clase EducacionService es un servicio que maneja las operaciones CRUD 
 * (crear, leer, actualizar y eliminar) de la entidad Educacion. Tiene una URL que depende 
 * del entorno en el que se ejecuta la aplicación y utiliza el módulo HttpClient para hacer 
 * solicitudes HTTP.
 *
 * @author Dino Ferré
 **/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {

  URL = window.location.href.includes('localhost') ? 'http://localhost:8080/educacion/' : 'https://portfolio-backend-tqnw.onrender.com/educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}