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
 isLoginError : boolean = false;
 msgError: string;

  constructor(public userRegistrationServiceObject: UserRegistrationServices
    , private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }
  
   AddUser(){
     if(this._userRegistrationModel.UserName == null ||this._userRegistrationModel.Email == null || this._userRegistrationModel.PhoneNo == null
        ||this._userRegistrationModel.ConfirmPassword == null || this._userRegistrationModel.Password == null) {
      
      this.isLoginError = true;
      this.msgError = 'Please Enter Register';
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
