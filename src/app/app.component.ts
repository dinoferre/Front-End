/**
 * En este código defino el componente raíz de la app Angular, que se utiliza para definir el contenido 
 * principal de la app. El selector del componente se establece en "app-root", especifico la plantilla HTML 
 * y la hoja de estilos correspondientes.
 *
 * @author Dino Ferré
 **/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Proyecto-Final-Argentina-Programa';
}