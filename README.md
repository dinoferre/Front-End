# Proyecto Final Argentina Programa

En Desarrollo...

Este proyecto es el frontend de una aplicación web construida con Angular y TypeScript. La aplicación se conecta a un backend desarrollado en Spring Boot y utiliza una base de datos MySQL para almacenar y recuperar datos.

## Tecnologías Utilizadas

- **Angular 12:** Framework de desarrollo web para crear aplicaciones SPA (Single Page Application).
- **TypeScript 4.3:** Superset de JavaScript que permite agregar tipos de datos y otras características a JavaScript.
- **Spring Boot 2.5:** Framework de Java que facilita la creación de aplicaciones web y microservicios escalables.
- **MySQL 8.0:** Es una base de datos relacional de código abierto. Ofrece una alta escalabilidad, seguridad y fiabilidad.


-Componentes: Angular utiliza una arquitectura basada en componentes para crear y organizar la interfaz de usuario.

-Módulos: La aplicación se organiza en módulos para mejorar la mantenibilidad y escalabilidad del proyecto.

-Services: Los servicios en Angular se utilizan para realizar peticiones al backend y gestionar el estado de la aplicación.

Configuración del proyecto
Antes de ejecutar el proyecto, asegúrese de tener instalado Node.js y Angular CLI. Luego, clone este repositorio en su máquina local y ejecute el comando npm install para instalar las dependencias del proyecto.

## Conexión con el backend

La aplicación se conecta a un backend desarrollado en Spring Boot a través de peticiones HTTP. Para establecer la conexión con el backend, asegúrese de que el backend esté funcionando correctamente y que la dirección del servidor se encuentre correctamente configurada en la aplicación. La configuración de la conexión con el backend se encuentra en el archivo `environment.ts`.

## Ejecución del proyecto

Para ejecutar la aplicación, abra una terminal en el directorio del proyecto y ejecute el comando `ng serve`. La aplicación se ejecutará en el puerto 4200 por defecto. Abra un navegador web y navegue a la dirección http://localhost:4200 para visualizar la aplicación.
