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
        this.Update();
    }

    public Update(){
        this._http.get<Array<IUser>>("multisaladelfino.com/api/account/users").subscribe((u) => {this._listaUser = u});
    }
    public get Users(){
        return this._listaUser;
    }

    public AddUsers(users: Array<IUser>){
        this._http.post<Array<IUser>>("multisaladelfino.com/api/account/users",JSON.stringify(users),this._header);
    }

    public EditUsers(user: IUser){
        this._http.put("multisaladelfino.com/api/account/users", JSON.stringify(user),this._header);
        this.Update();
    }

    public DeleteUsers(){
        
    }
}