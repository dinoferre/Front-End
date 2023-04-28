/**
 * Este componente se encarga de mostrar un formulario para editar una experiencia laboral específica. 
 * El componente recupera el ID de la experiencia de la URL y usa el servicio "ExperienciaService" 
 * para obtener la información de la experiencia actual. El usuario puede modificar los datos en el 
 * formulario y, al hacer clic en el botón "Actualizar", se llama al método "onUpdate()" que utiliza 
 * el servicio "ExperienciaService" para actualizar los datos en la base de datos. Si hay algún error 
 * en el proceso, se muestra una alerta y se redirige al usuario a la página principal.
 *
 * @author Dino Ferré
 **/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit {

  expLab: Experiencia = null;

  constructor(
    private sExperiencia: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail({ id }).subscribe(
      data => {
        this.expLab = data;
      },
      error => {
        alert("Error al modificar la experiencia");
        console.error(error);
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}