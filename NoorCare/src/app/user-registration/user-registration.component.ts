import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { UserRegistrationServices } from './userRegistration.service';
import UserRegistrationModel from './userRegistratio.model';

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
    let userToken = localStorage.getItem('userToekn');
    if(userToken != null) { 
      this.router.navigate(['/']);
    }
  }
  
   AddUser(){
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneno = /^\d{8}$/;
     if(this._userRegistrationModel.UserName == null) {
      this.isLoginError = true;
      this.msgError = 'Enter UserName';
     } else if(this._userRegistrationModel.Email == null || !this._userRegistrationModel.Email.match(emailPattern)) {
      this.isLoginError = true;
      this.msgError = 'Enter a vaild email address';
     } else if(this._userRegistrationModel.PhoneNumber == null || !this._userRegistrationModel.PhoneNumber.toString().match(phoneno)) {
      this.isLoginError = true;
      this.msgError = 'Phone number should be 8 digit number';
     } else if (this._userRegistrationModel.Password == null) {
      this.isLoginError = true;
      this.msgError = 'Enter Password';
     }
     else if(this._userRegistrationModel.Password != this._userRegistrationModel.ConfirmPassword) {
      this.isLoginError = true;
      this.msgError = 'Do not Match Password';
    } else {
      console.log('Request');
      this._userRegistrationModel.AccountType= "1";
      this._userRegistrationModel.Gender= 1; 

      console.log(this._userRegistrationModel);


      this.userRegistrationServiceObject.registerUser(this._userRegistrationModel)
        .subscribe((data: any) => {
          console.log('Data: ' + data);
          if(data == null) {
            this.isLoginError = true;
            this.msgError = 'Exist Username or Email Id';
          } else {
            if (data.Succeeded == true) {
<<<<<<< HEAD
              localStorage.setItem('userToekn', data.access_token);
=======
              this.toastr.success('Registration Successfully');
>>>>>>> 82be9e423e6e36dcc28d0c19e72c73129cd016ab
              this.router.navigateByUrl('medical');
            }
          }
          
        });
     }
     
   }

}
