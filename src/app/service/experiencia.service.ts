/**
 * La clase ExperienciaService es un servicio que maneja las operaciones CRUD 
 * (crear, leer, actualizar y eliminar) de la entidad Experiencia. Tiene una URL que depende 
 * del entorno en el que se ejecuta la aplicación y utiliza el módulo HttpClient para hacer 
 * solicitudes HTTP.
 *
 * @author Dino Ferré
 **/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL = window.location.href.includes('localhost') ? 'http://localhost:8080/explaboral/' : 'https://portfolio-backend-tqnw.onrender.com/explaboral/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public getById({ id }: { id: number; }): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public create(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'crear', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}