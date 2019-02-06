import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'app/services/user.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mode: string;

  constructor(private userService : UserService) { }

  public get Users(){
    return this.userService.Users;
  }

  ngOnInit() {
    this.mode = "Login";
  }

  changeMode(){
    //debugger;
    this.mode = this.mode=="Login" ? "Register" : "Login";
  }
}
