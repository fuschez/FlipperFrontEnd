import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'app/services/user.services';
import { AuthService } from 'app/services/authentication.services';
import { tryParse } from 'selenium-webdriver/http';
import { first } from 'rxjs/operators';
import { IUser } from 'app/models/user.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser = {name: "", surname: "", email: "", password: "", confirmPassword: ""};
  error: string;
  mode: string;

  constructor(private authService : AuthService ) {
  }

  ngOnInit() {
    this.mode = "Login";
  }

  changeMode(){
    //debugger;
    this.mode = this.mode=="Login" ? "Register" : "Login";
  }

  login(){
    this.authService.login(this.user.email,this.user.password).pipe(first())
      .subscribe(
        err => this.error = 'Could not authenticate'
    );
  }
  register(){
    //TODO
    alert('Registration: ' + JSON.stringify(this.user));
  }
}
