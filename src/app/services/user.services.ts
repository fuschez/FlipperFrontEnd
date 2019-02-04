import { Injectable } from "@angular/core";
import { IUser } from "app/models/user.models";

@Injectable()
export class UserService {
    private _listaUser : Array<IUser>;

    constructor() {
        this._listaUser = [];

        this._listaUser.push({
            nome:"Nome1",
            cognome:"Cognome1",
            email:"nomecognome1@email.com",
            password:"password1"
        })
    }

    public get Users(){
        return this._listaUser;
    }

    public AddUsers(){

    }

    public EditUsers(){

    }

    public DeleteUsers(){
        
    }
}