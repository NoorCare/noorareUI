import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  username;
  ngOnInit() {
    if(localStorage.getItem('userName') != '') {
      this.username = localStorage.getItem('userName');
    }
  }

  constructor(public router: Router){}
  Logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}