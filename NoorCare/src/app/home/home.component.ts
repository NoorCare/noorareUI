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

<<<<<<< HEAD
  init(){
    //Promise.all([this.getClaimData()]);

  }
 // getClaimData(): void{
  //this.userService.getUserClaims().subscribe(responce =>  this._data= responce);
 //}
  ngOnInit() {
    let userToken = localStorage.getItem('userToekn');
    if(userToken != null) { 
      this.isLogin =true;
      console.log('Vivek');
      //this.init();
      }else{
        
      }
      // if(this._data !== undefined){
      // this.name = this._data.FirstName + ' ' + this._data.LastName;
    //}
=======
  
  ngOnInit() {
    
>>>>>>> 82be9e423e6e36dcc28d0c19e72c73129cd016ab
  }

  Logout() {
   // localStorage.removeItem('userToken');
   // this.router.navigate(['/login']);
  }

}
