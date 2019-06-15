import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import UserRegistrationModel from './userRegistratio.model';
import Constant from '../common/constant';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServices {
    
    constructor(public http: HttpClient){

    }

    public registerUser(userRegistration: UserRegistrationModel) {

        console.log('Body: ' + JSON.stringify(userRegistration));

        const body = new HttpParams()
        .set('AccountType', userRegistration.AccountType)
        .set('ConfirmPassword', userRegistration.ConfirmPassword)
        .set('Email', userRegistration.Email)
        .set('FirstName', userRegistration.FirstName)
        .set('Gender', userRegistration.Gender.toString())
        .set('LastName', userRegistration.LastName)
        .set('Password', userRegistration.Password)
        .set('PhoneNumber', userRegistration.PhoneNumber.toString())
        .set('UserName', userRegistration.UserName)
        .set('jobType', userRegistration.jobType.toString())
        

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':'application/x-www-form-urlencoded',
            'No-Auth':'True'
          })
        }
        //var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','No-Auth':'True'});
        return this.http.post(Constant.serviceBaseUrl + Constant.registrationApi, body.toString(), httpOptions);
    }

    userAuthentication(userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True'});
        return this.http.post(Constant.serviceBaseUrl + 'token', data, { headers: reqHeader });
    }

    getUserClaims(){
      return  this.http.get(Constant.serviceBaseUrl +'api/GetUserClaims');
    }
}