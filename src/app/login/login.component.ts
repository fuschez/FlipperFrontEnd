import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'app/services/user.services';
import { NgForm } from '@angular/forms';
import { IUser } from 'app/models/user.models';
import { isBuffer } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mode: string;
  loginForm: NgForm;
  user: IUser = {email: "", name: "", surname: "", password: "", confirmPassword: ""};

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

  login(){
    alert('Successo!'+JSON.stringify(this.user));
  }
  register(){
    if(this.loginForm.form.valid)
      console.log('Register');
    else console.log('No register');
  }
}
