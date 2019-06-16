import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationServices } from '../user-registration/userRegistration.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public name: string;
 public _data: any;
  public isLogin: boolean =false;

  constructor(private router:Router, private userService: UserRegistrationServices) { }

  
  ngOnInit() {
    
  }

  Logout() {
   // localStorage.removeItem('userToken');
   // this.router.navigate(['/login']);
  }

}
