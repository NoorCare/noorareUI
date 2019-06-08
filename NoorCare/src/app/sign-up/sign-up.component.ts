import { Component, OnInit } from '@angular/core';
import { DoctorComponent } from '../doctor/doctor.component'
import { PharmacyComponent } from '../pharmacy/pharmacy.component'
import { HospitalComponent } from '../hospital/hospital.component'
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { HeaderComponent } from '../header/header.component'
import { FooterComponent } from '../footer/footer.component'
import UserRegistrationModel from '../user-registration/userRegistratio.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public isLogin: boolean =false;
  public name:string="";
  constructor() { }

  ngOnInit() {
  }

}
