import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { HeaderComponent } from '../header/header.component'
import { FooterComponent } from '../footer/footer.component'
import { ToastrService } from 'ngx-toastr'
import UserRegistrationModel from '../user-registration/userRegistratio.model';
import { UserRegistrationServices } from '../user-registration/userRegistration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLogin: boolean =false;
  public name:string="";
  isLoginError : boolean = false;

  constructor(public userRegistrationServiceObject: UserRegistrationServices, private router: Router,
     private toastr: ToastrService) { }

  ngOnInit() {
  
  }

  OnSubmit(userName, password){

    if(userName == '' && password == '') {
      this.isLoginError = true;
    } else {
      this.userRegistrationServiceObject.userAuthentication(userName, password).subscribe((data: any) => {
        console.log('-------------1--------',data.access_token);
        localStorage.setItem('userToekn', data.access_token);
        console.log('-------------3--------',localStorage.getItem('userToekn'));
        this.router.navigateByUrl('');
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      })
    }
  }

}