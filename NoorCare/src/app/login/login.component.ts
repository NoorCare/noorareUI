import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  isLoginError : boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    
  }

  OnSubmit(userName, password){

    console.log('UserName: ' + userName + ' Password: ' + password);


   this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToekn', data.access_token);
      this.router.navigate(['/']);
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
    })
  }
//name,email,number,jobType,password,rePassword
  OnRegisterSubmit(fullName,email,number,jobType,password,rePassword) {
    console.log('Clicked Register');
    console.log('Full Name: ' + fullName + 'Email: ' + email + ' Number: ' + number + 'Job Type: ' + jobType + ' password: ' + password + 'RePassword: ' +rePassword );
    this.userService.registerUser(fullName,email,password,number,jobType).subscribe((data: any) => {
      if(data.Succeeded == true) {
        this.router.navigate(['/']);
        console.log('success');
      } else {
        console.log('Error');
      }
    })
  }

}