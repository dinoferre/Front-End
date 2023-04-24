import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  // expURL = 'http://localhost:8080/explaboral/';
  expURL = 'https://portfolio-backend-tqnw.onrender.com/explaboral/';

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

  public update(id: number, experiencia: Experiencia): Observable<HttpResponse<any>> {
    return this.httpClient.put<HttpResponse<any>>(this.expURL + `update/${id}`, experiencia, { observe: 'response' });
  }


  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}