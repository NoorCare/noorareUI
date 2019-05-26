import { Component, OnInit } from '@angular/core';
import UserRegistrationModel from './userRegistratio.model';
import UserRegistrationServices from './userRegistration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
 _userRegistrationModel = new UserRegistrationModel();
  constructor(public userRegistrationServiceObject: UserRegistrationServices) { }

  ngOnInit() {
  }
  
   AddUser(){
     debugger;
    this.userRegistrationServiceObject.AddUser(this._userRegistrationModel);
   }

}
