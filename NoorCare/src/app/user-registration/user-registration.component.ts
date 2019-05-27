import { Component, OnInit } from '@angular/core';
import UserRegistrationModel from './userRegistratio.model';
import UserRegistrationServices from './userRegistration.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
 _userRegistrationModel = new UserRegistrationModel();
  constructor(public userRegistrationServiceObject: UserRegistrationServices
    , private toastr: ToastrService) { }

  ngOnInit() {
  }
  
   AddUser(){
     debugger;
     this._userRegistrationModel.AccountType="1";
     this.userRegistrationServiceObject.registerUser(this._userRegistrationModel)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.toastr.success('User registration successful');
          this.router.navigateByUrl(['login']);
        }
        else
          this.toastr.error(data.Errors[0]);
      });
   }

}
