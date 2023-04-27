/**
 * Este código permite agregar nuevos datos de educación. Este componente tiene dos propiedades: 
 * "nombreE" y "descripcionE". Tiene un constructor que inyecta un servicio de Educacion y el Router 
 * de Angular, y un método "onCreate()" que crea una nueva instancia de Educacion y la guarda 
 * mediante el método "save()" del servicio.
 *
 * @author Dino Ferré
 **/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})

export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}