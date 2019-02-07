import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService } from 'app/services/user.services';
import { AuthService } from 'app/services/authentication.services';
import { tryParse } from 'selenium-webdriver/http';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email:string;
  public pwd:string;
  public isLog: boolean;
  public error: string;

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
  }

}
