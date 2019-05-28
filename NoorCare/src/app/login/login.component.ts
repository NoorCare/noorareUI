import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import UserRegistrationServices from '../user-registration/userRegistration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLoginError : boolean = false;

  constructor(public userRegistrationServiceObject: UserRegistrationServices, private router: Router) { }

  ngOnInit() {
  
  }

  OnSubmit(userName, password){

    if(userName == '' && password == '') {
      this.isLoginError = true;
    } else {
      this.userRegistrationServiceObject.userAuthentication(userName, password).subscribe((data: any) => {
        localStorage.setItem('userToekn', data.access_token);
        this.router.navigate(['/']);
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      })
    }
  }

}