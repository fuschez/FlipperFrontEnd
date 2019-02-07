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

  user: IUser;
  public email:string;
  public pwd:string;
  public isLog: boolean;
  public error: string;
  public mode: string;

  constructor(private authService : AuthService ) { 
    this.isLog = false;
    this.email = "";
    this.email = "";
  }

  public Accedi() : void{
    console.log("le banane con in mezzo manzotin");
    this.isLog = true;

    this.authService.login(this.email,this.pwd).pipe(first())
      .subscribe(
        err => this.error = 'Could not authenticate'
      );

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
  register(){ }
}
