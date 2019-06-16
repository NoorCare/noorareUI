import { Component, OnInit } from '@angular/core';
import { UserRegistrationServices } from '../user-registration/userRegistration.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
  public _data: any;
  public isLogin: boolean =false;

  constructor(public userRegistrationService: UserRegistrationServices) { } 

  ngOnInit() {
    let userToken = localStorage.getItem('userToekn');
    if(userToken != null) { 
      this.isLogin =true;
      console.log('Vivek');
      //this.init();
      }else{
        
      }
  }

}
