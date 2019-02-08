import { Component, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
import { UserService } from 'app/services/user.services';
import { AuthService } from 'app/services/authentication.services';
import { tryParse } from 'selenium-webdriver/http';
import { first } from 'rxjs/operators';
import { IUser } from 'app/models/user.models';
import { Alert } from 'selenium-webdriver';
import { NgbAlert, NgbAlertModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from 'app/modal-login/modal-login.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input("controlloModal")
  controlloModal: LoginModalComponent;

  user: IUser = {name: "", surname: "", email: "", password: "", confirmPassword: ""};
  error: string;
  mode: string;

  constructor(private authService : AuthService, private userService : UserService, private alertService: NgbAlertConfig ) {
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
    
    this.mode = "Logout";
    

  }
  register(){
    console.log("ok");
    this.userService.AddUsers(this.user).subscribe();
    this.mode = "Login";
  }

  

  
}
