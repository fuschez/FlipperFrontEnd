import { Injectable } from "@angular/core";
import { IUser } from "app/models/user.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {
    private _listaUser : Array<IUser>;
    private _header = {
        headers : new HttpHeaders ({
            "Content-type": "application/json"
        })
    };

    constructor(private _http: HttpClient) {
    }

    
    public get Users(){
        return this._listaUser;
    }

    public AddUsers(users: Array<IUser>){
        this._http.post<Array<IUser>>("http://multisaladelfino.com/api/account/users",JSON.stringify(users),this._header);
    }

    public EditUsers(user: IUser){
        this._http.put("http:// multisaladelfino.com/api/account/users", JSON.stringify(user),this._header);
        
    }

    public DeleteUsers(){
        
    }
}