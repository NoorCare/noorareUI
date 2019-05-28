import { Component, OnInit } from '@angular/core';
import UserRegistrationModel from './userRegistratio.model';
import UserRegistrationServices from './userRegistration.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
 _userRegistrationModel = new UserRegistrationModel();
 name;
 isLoginError : boolean = false;
 msgError: string;

  constructor(public userRegistrationServiceObject: UserRegistrationServices
    , private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }
  
   AddUser(){
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneno = /^\d{10}$/;
     if(this._userRegistrationModel.UserName == null) {
      this.isLoginError = true;
      this.msgError = 'Enter UserName';
     } else if(this._userRegistrationModel.Email == null || !this._userRegistrationModel.Email.match(emailPattern)) {
      this.isLoginError = true;
      this.msgError = 'Enter a vaild email address';
     } else if(this._userRegistrationModel.PhoneNo == null || !this._userRegistrationModel.PhoneNo.toString().match(phoneno)) {
      this.isLoginError = true;
      this.msgError = 'Phone number should be 10 digit number';
     } else if (this._userRegistrationModel.Password == null) {
      this.isLoginError = true;
      this.msgError = 'Enter Password';
     }
     else if(this._userRegistrationModel.Password != this._userRegistrationModel.ConfirmPassword) {
      this.isLoginError = true;
      this.msgError = 'Do not Match Password';
    } else {
      console.log('Request');
      this._userRegistrationModel.AccountType="1";
      this.userRegistrationServiceObject.registerUser(this._userRegistrationModel)
        .subscribe((data: any) => {
          if (data.Succeeded == true) {
            this.toastr.success('User registration successful');
            this.router.navigateByUrl('login');
          }
          else
            this.toastr.error(data.Errors[0]);
        });
     }
     
   }

}
