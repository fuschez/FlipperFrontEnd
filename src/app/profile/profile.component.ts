import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/models/user.models';
import { UserService } from 'app/services/user.services';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    private _user : IUser;
    constructor(private _userService:UserService) { }

    ngOnInit() {
        this.GetUser(localStorage.getItem('id_token'));
    }

    public GetUser(token:string)
    {
        this._userService.GetUser(token).subscribe(x=> this._user = x);
    }

    DeleteAccount(){
        this._userService.DeleteUsers(this._user);
    }

}
