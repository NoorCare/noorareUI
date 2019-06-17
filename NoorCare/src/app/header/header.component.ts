import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationServices } from '../user-registration/userRegistration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()
export class HeaderComponent implements OnInit {
  constructor(private toastr: ToastrService, private router:Router, private userService: UserRegistrationServices) { }

  @Input() isLogin: boolean;
  @Input() name: string = "";
  username;
  ngOnInit() {
    if(localStorage.getItem('userName') != '') {
      this.username = localStorage.getItem('userName');
    }
  }

  Logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}