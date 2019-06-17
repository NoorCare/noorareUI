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
    let userToken = localStorage.getItem('userToekn');
    if(userToken != null) { 
      this.router.navigate(['/']);
    }
  }

  OnSubmit(userName, password){

    if(userName == '' && password == '') {
      this.toastr.success('Hello world!', 'Toastr fun!');
      this.isLoginError = true;
    } else {
      this.userRegistrationServiceObject.userAuthentication(userName, password).subscribe((data: any) => {
        localStorage.setItem('userToekn', data.access_token);
        localStorage.setItem('userName', userName);
        console.log('-------------3--------',localStorage.getItem('userToekn'));

        this.router.navigateByUrl('medical');
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      })
    }
  }

}