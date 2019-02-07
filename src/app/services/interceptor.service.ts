import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class Interception  implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken = localStorage.getItem("id_token"); //recuperiamo il token dalla memoria
        if(idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken) 
            });// clona l'intestazione http e aggiunge un intestazione con il jwt

            return next.handle(cloned); //
        }
        else {
            return next.handle(req); //la richiesta passa al server senza modifiche
        }
    }
}
