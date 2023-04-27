/**
 * Este componente tiene un atributo "persona" de tipo "persona" que se inicializa con valores vacíos 
 * en su constructor. El componente tiene un método "ngOnInit()" que se llama después de que se crea 
 * el componente. En el método, se llama al método "getPersona()" del servicio "PersonaService" y se 
 * suscribe al resultado, asignando los datos de persona recibidos al atributo "persona".
 *
 * @author Dino Ferré
 **/

import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  persona: persona = new persona("", "", "");

  constructor(public personaService: PersonaService) {

  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data; })
  }

}