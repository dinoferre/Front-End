/**
 * Este código muestra la definición de una clase InterceptorService que implementa el interfaz 
 * HttpInterceptor de Angular para agregar un token JWT a las solicitudes HTTP que realizan los 
 * usuarios autenticados en la aplicación.
 * Además, se exporta un objeto interceptorProvider que se utiliza para proporcionar el servicio 
 * InterceptorService como un interceptor HTTP de Angular, utilizando el proveedor HTTP_INTERCEPTORS.
 *
 * @author Dino Ferré
 **/

import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
    providedIn: 'root'
})

export class InterceptorService {
    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let intReq = req;
        const token = this.tokenService.getToken();
        if (token != null) {
            intReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)
            });
        }
        return next.handle(intReq);
    }
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];