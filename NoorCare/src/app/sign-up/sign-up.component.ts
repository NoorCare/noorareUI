import { Component, OnInit } from '@angular/core';
import { DoctorComponent } from '../doctor/doctor.component'
import { PharmacyComponent } from '../pharmacy/pharmacy.component'
import { HospitalComponent } from '../hospital/hospital.component'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
