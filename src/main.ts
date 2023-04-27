/**
 * Este código es utilizado para iniciar la app. Utiliza la función platformBrowserDynamic().bootstrapModule() 
 * para arrancar el módulo principal de la aplicación (AppModule). Si ocurre algún error durante el proceso de 
 * arranque, se mostrará en la consola del navegador mediante console.error().
 *
 * @author Dino Ferré
 **/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));