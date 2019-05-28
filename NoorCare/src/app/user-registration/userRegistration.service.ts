import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import UserRegistrationModel from './userRegistratio.model';
import Constant from '../common/constant';

@Injectable()
export default class UserRegistrationServices {
    
    constructor(public httpclient: HttpClient){

    }

    public registerUser(userRegistration: UserRegistrationModel){
        var reqHeader = new HttpHeaders({'No-Auth':'True'});
        return this.httpclient.post(Constant.serviceBaseUrl + Constant.registrationApi, 
        userRegistration, {headers : reqHeader});
    }

    public userAuthentication(userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        console.log('data: ' + data);
        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/x-www-urlencoded','No-Auth':'True',
            'Access-Control-Allow-Origin': '*'
         });
        return this.httpclient.post(Constant.serviceBaseUrl + '/token', data, { headers: reqHeader });
    }

}