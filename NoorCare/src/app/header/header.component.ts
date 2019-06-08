import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import UserRegistrationServices from '../user-registration/userRegistration.service';
import UserRegistrationModel from '../user-registration/userRegistratio.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()
export class HeaderComponent implements OnInit {
  @Input() isLogin: boolean;
  @Input() name: string = "";
  ngOnInit() {
  }
  Logout() {
    //localStorage.removeItem('userToken');
    //this.router.navigate(['/login']);
  }
}
