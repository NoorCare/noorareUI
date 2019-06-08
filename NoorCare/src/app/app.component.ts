import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import UserRegistrationServices from './user-registration/userRegistration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NoorCare';
  
  constructor(private ttle:Title, private router: Router, private userService: UserRegistrationServices) {}

  ngOnInit() {
  }
}
