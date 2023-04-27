/**
 * Este componente muestra una lista de objetos "Educacion" y proporciona la funcionalidad de 
 * eliminar elementos de la lista. También verifica si el usuario ha iniciado sesión o no utilizando 
 * el servicio "TokenService". La lista de objetos "Educacion" se carga en el método "ngOnInit()" 
 * utilizando el servicio "EducacionService" y se asigna a la variable "educacion". El método "delete()" 
 * elimina un objeto "Educacion" utilizando su ID y vuelve a cargar la lista después de la eliminación.
 *
 * @author Dino Ferré
 **/

import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}