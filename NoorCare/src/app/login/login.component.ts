import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { ToastrService } from 'ngx-toastr';
import { UserRegistrationServices } from '../user-registration/userRegistration.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLogin: boolean =false;
  public name:string="";
  isLoginError : boolean = false;

  constructor(public userRegistrationServiceObject: UserRegistrationServices, private router: Router
    ,private toastr: ToastrService) { }

  ngOnInit() {
  
  }

  OnSubmit(userName, password){

    if(userName == '' && password == '') {
      this.toastr.success('Hello world!', 'Toastr fun!');
      this.isLoginError = true;
    } else {
      this.userRegistrationServiceObject.userAuthentication(userName, password).subscribe((data: any) => {
        localStorage.setItem('userToekn', data.access_token);
        this.router.navigateByUrl('medical');
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      })
    }
  }

}