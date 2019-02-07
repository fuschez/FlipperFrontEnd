import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { IUser } from "app/models/user.models";
import { Observable } from "rxjs";
import { tap, shareReplay, map } from "rxjs/operators";
import * as moment from "moment";

@Injectable()
export class AuthService {


    constructor(private _http: HttpClient) {

    }

    login(username: string, password: string) {
        let body = `username=${username}&password=${password}&grant_type=password`;
    return this._http.post<{access_token: string,expires_in:string}>('http://multisaladelfino.com/token',body,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }).pipe( map(result => {
        const expiresAt = moment().add(result.expires_in, 'second');
        localStorage.setItem('id_token',result.access_token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
        console.log("token "+localStorage.getItem('id_token'));
        console.log("expires "+localStorage.getItem('expires_at'));
        return true;   
      }));

    }

    // private setSession(authResult) { //memorizziamo il jwt nella memoria locale
    //     const expiresAt = moment().add(authResult.expiresIn, 'second');

    //     localStorage.setItem('id_token', authResult.idToken);
    //     localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    // }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);

        return moment(expiresAt);
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
}