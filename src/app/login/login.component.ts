import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService } from 'app/services/user.services';
import { AuthService } from 'app/services/authentication.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email:string;
  public pwd:string;
  
  constructor(private authService : AuthService ) { 
    email: "";
    pwd: "";
  }

  public Accedi() : void{
    console.log("le banane con in mezzo manzotin")
    this.authService.login(this.email,this.pwd);

  }

  ngOnInit() {
  }

}
