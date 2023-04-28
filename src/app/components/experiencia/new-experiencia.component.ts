/**
 * Este componente permite al usuario crear una nueva experiencia. El componente tiene dos propiedades 
 * llamadas nombreE y descripcionE.  Cuando el usuario crea una nueva experiencia, se crea una 
 * instancia de la clase Experiencia y se envía a través del servicio de ExperienciaService para que 
 * se cree en el servidor. Si la creación tiene éxito, se muestra una alerta y se redirige al usuario 
 * a la página principal. Si falla, se muestra una alerta y se redirige al usuario a la página principal.
 *
 * @author Dino Ferré
 **/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})

export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log('Valores de nombreE y descripcionE:', this.nombreE, this.descripcionE);
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}