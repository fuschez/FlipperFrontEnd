import { Injectable } from "@angular/core";
import { IUser } from "app/models/user.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class UserService {
    private _header = {
        headers : new HttpHeaders ({
            "Content-type": "application/json"
        })
    };

    constructor(private _http: HttpClient) {
    }

    public AddUsers(user: IUser):Observable<any>{
        return this._http.post<IUser>("http://multisaladelfino.com/api/account/register",JSON.stringify(user),this._header);

    }

    public EditUsers(user: IUser){
        this._http.put("http://multisaladelfino.com/api/account/", JSON.stringify(user),this._header);
        
    }

    public DeleteUsers(){
        
    }
}