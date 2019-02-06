import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "app/models/user.models";
import { Observable } from "rxjs";
import { tap, shareReplay } from "rxjs/operators";
import * as moment from "moment";

@Injectable()
export class AuthService{

    constructor(private _http: HttpClient){

    }

    login(username:string, password:string){
        debugger;
        const req = this._http.post<IUser>("http://multisaladelfino.com/token", {username, password}).pipe(tap(res=>this.setSession)).subscribe();
        
    }

    private setSession(authResult){ //memorizziamo il jwt nella memoria locale
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token',authResult.idToken);
        localStorage.setItem("expires_at",JSON.stringify(expiresAt.valueOf()));
    }

    logout(){
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    getExpiration(){
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);

        return moment(expiresAt);
    }

    public isLoggedIn(){
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
}