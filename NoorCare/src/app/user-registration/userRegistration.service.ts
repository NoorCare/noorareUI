import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import UserRegistrationModel from './userRegistratio.model';
import Constant from '../common/constant';

@Injectable()
export class UserRegistrationServices {
    
    constructor(public http: HttpClient){

    }

    public registerUser(userRegistration: UserRegistrationModel){
        var reqHeader = new HttpHeaders({'No-Auth':'True'});
        return this.http.post(Constant.serviceBaseUrl + Constant.registrationApi, 
        userRegistration, {headers : reqHeader});
    }

    userAuthentication(userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'text/plain','No-Auth':'True'});
        return this.http.post(Constant.serviceBaseUrl + 'token', data, { headers: reqHeader });
      }

      getUserClaims(){
        return  this.http.get(Constant.serviceBaseUrl +'api/GetUserClaims');
       }
}