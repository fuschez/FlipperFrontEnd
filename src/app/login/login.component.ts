import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) { }

  public get Users(){
    return this.userService.Users;
  }

  ngOnInit() {
  }

}
