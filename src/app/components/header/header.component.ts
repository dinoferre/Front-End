/**
 * El HeaderComponent es un componente que muestra un encabezado en la página web. Tiene un atributo 
 * isLogged que se utiliza para controlar si el usuario ha iniciado sesión o no. Si el usuario ha 
 * iniciado sesión, se muestra un botón de cerrar sesión en el encabezado, de lo contrario, se muestra 
 * un botón de iniciar sesión. También tiene métodos para cerrar sesión y redirigir a la página de 
 * inicio de sesión. Además, cuenta con una función de colapso para colapsar y expandir la barra de 
 * navegación en pantallas más pequeñas.
 *
 * @author Dino Ferré
 **/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) {

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['login'])
  }

  isCollapsed = true;
}