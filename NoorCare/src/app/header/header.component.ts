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

  public isLogin: boolean;
  @Input() name: string = "";
  public _data: any;
  ngOnInit() {

    let userToken = localStorage.getItem('userToekn');
    if(userToken != null) { 
      this.isLogin =true;
      this._data = this.getClaimData();
      }else{
       }
       if(this._data !== undefined){
       this.name = this._data.FirstName + ' ' + this._data.LastName;
       }

  }


  
  public async getClaimData(){
    await this.userService.getUserClaims();
  }

  Logout() {
    //localStorage.removeItem('userToken');
    //this.router.navigate(['/login']);
  }
}
